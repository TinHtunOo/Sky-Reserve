"use server";
import prisma from "./prisma";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { toLocalISOTime } from "./utility";

const JWT_SECRET = process.env.JWT_SECRET || "9tto9TTO";

export async function signUp(formData) {
  const fullName = formData.get("fullName");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");

  if (password !== confirmPassword) {
    return { error: "Passwords do not match" };
  }

  const existingUser = await prisma.users.findUnique({
    where: { email },
  });

  if (existingUser) {
    return { error: "Email already exists" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await prisma.users.create({
    data: {
      full_name: fullName,
      email,
      password: hashedPassword,
    },
  });
}

export async function signIn(formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = await prisma.users.findUnique({
    where: { email },
  });

  if (!user) {
    return { error: "Invalid email or password" };
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return { error: "Invalid email or password" };
  }

  const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, {
    expiresIn: "7d",
  });

  cookies().set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function logout() {
  cookies().delete("token");

  revalidatePath("/");
  redirect("/");
}

export async function createBooking(flightIds, userId) {
  const numberIds = flightIds.map(Number);

  await Promise.all(
    numberIds.map((flightId) => {
      return prisma.bookings.create({
        data: {
          user_id: userId,
          flight_id: flightId,
        },
      });
    })
  );
  redirect("/flights/thankyou");
}

export async function deleteBooking(bookingId) {
  try {
    await prisma.bookings.delete({
      where: { id: Number(bookingId) },
    });
    revalidatePath("/account/mybooking");

    return { success: true };
  } catch (error) {
    return { error: "Failed to delete booking" };
  }
}

export async function confirmBooking(bookingId) {
  try {
    await prisma.bookings.update({
      where: { id: Number(bookingId) },
      data: { status: "confirmed" },
    });
    revalidatePath("/admin/bookings");

    return { success: true };
  } catch (error) {
    return { error: "Failed to confirm booking" };
  }
}

export async function editUser(formData) {
  try {
    const userId = Number(formData.get("userId"));
    const name = formData.get("name");
    const password = formData.get("password");
    const updateData = {
      full_name: name,
    };

    if (password && password.trim() !== "") {
      const hashed = await bcrypt.hash(password, 10);
      updateData.password = hashed;
    }

    await prisma.users.update({
      where: { id: userId },
      data: updateData,
    });
    revalidatePath("/account/edit");
    return { success: true };
  } catch (error) {
    return { error: "Failed to edit profile" };
  }
}

export async function deleteFlight(flightId) {
  try {
    await prisma.flights.delete({
      where: { id: Number(flightId) },
    });
    revalidatePath("/admin/flightsadmin");

    return { success: true };
  } catch (error) {
    return { error: "Failed to delete flight" };
  }
}

const airlineLogos = {
  "Myanmar Airways International": "mai.jpg",
  "Singapore Airlines": "singapore.svg",
  "Qatar Airways": "qatar.svg",
  Emirates: "emirates.svg",
  AirAsia: "airasia.svg",
  "Air KBZ": "airkbz.png",
  "Myanmar National Airlines": "mna.jpg",
};

export async function addFlight(formData) {
  try {
    const lastFlight = await prisma.flights.findFirst({
      orderBy: {
        id: "desc",
      },
    });
    const airline = formData.get("airline");
    const airlineLogo = airlineLogos[airline] || "default-logo.png";
    const departureDate = new Date(formData.get("departureDate"));
    const departureTime = formData.get("departureTime");
    const arrivalTime = formData.get("arrivalTime");

    const [depHour, depMin] = departureTime.split(":").map(Number);
    const departureDateTime = new Date(departureDate);
    departureDateTime.setHours(depHour, depMin, 0, 0);

    const depMinutes = depHour * 60 + depMin;
    let departureTimeRange = "evening";
    if (depMinutes < 360) {
      departureTimeRange = "early";
    } else if (depMinutes < 720) {
      departureTimeRange = "morning";
    } else if (depMinutes < 1080) {
      departureTimeRange = "afternoon";
    }

    const [arrHour, arrMin] = arrivalTime.split(":").map(Number);
    const arrivalDateTime = new Date(departureDate);
    arrivalDateTime.setHours(arrHour, arrMin, 0, 0);

    if (arrivalDateTime <= departureDateTime) {
      arrivalDateTime.setDate(arrivalDateTime.getDate() + 1);
    }

    const duration = Math.floor((arrivalDateTime - departureDateTime) / 60000);
    const boarding = new Date(toLocalISOTime(departureTime));
    boarding.setHours(boarding.getHours() - 3);
    const flight = {
      id: lastFlight ? lastFlight.id + 1 : 1,
      airline,
      airlineLogo,
      flightNumber: formData.get("flightNumber"),
      origin: formData.get("origin"),
      destination: formData.get("destination"),
      originAirport: formData.get("originAirport"),
      destinationAirport: formData.get("destinationAirport"),
      departureDate: departureDateTime,
      arrivalDate: arrivalDateTime,
      departureTime: toLocalISOTime(departureTime),
      arrivalTime: toLocalISOTime(arrivalTime),
      boardingTime: new Date(boarding.toISOString()),
      departureTimeRange,
      price: Number(formData.get("price")),
      stops: Number(formData.get("stops")),
      duration,
      cabinClass: formData.get("cabinClass"),
    };

    await prisma.flights.create({
      data: flight,
    });

    revalidatePath("/admin/flightsadmin");
    return { success: true };
  } catch (error) {
    console.error("Flight creation error:", error);
    return { error: "Failed to add flight" };
  }
}

export async function addUser(formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    const name = formData.get("name");

    const existingUser = await prisma.admin.findUnique({
      where: { email },
    });

    if (existingUser) {
      return { error: "Email already exists" };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.admin.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    revalidatePath("/admin/adduser");
    return { success: true };
  } catch (error) {
    console.error("Error creating user:", error);
    return { error: "Failed to create user" };
  }
}

// export async function logInAdmin(formData) {
//   const email = formData.get("email");
//   const password = formData.get("password");

//   const admin = await prisma.admin.findUnique({
//     where: { email },
//   });

//   if (!admin) {
//     return { error: "Invalid email or password" };
//   }

//   const isMatch = await bcrypt.compare(password, admin.password);
//   if (!isMatch) {
//     return { error: "Invalid email or password" };
//   }

//   const token = jwt.sign(
//     { id: admin.id, email: admin.email, role: "admin" },
//     JWT_SECRET,
//     {
//       expiresIn: "7d",
//     }
//   );

//   cookies().set("admin_token", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV === "production",
//     path: "/",
//     maxAge: 60 * 60 * 24 * 7,
//   });

//   return { success: true };
// }

export async function logInAdmin(formData) {
  try {
    const email = formData.get("email");
    const password = formData.get("password");
    console.log(email, password);

    const admin = await prisma.admin.findUnique({
      where: { email },
    });
    console.log(admin);
    if (!admin) {
      return { error: "Invalid email or password" };
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return { error: "Invalid email or password" };
    }

    const token = jwt.sign({ id: admin.id, email: admin.email }, JWT_SECRET, {
      expiresIn: "7d",
    });

    const cookieStore = cookies();
    cookieStore.set("admin_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return { success: true };
  } catch (error) {
    console.log(error);
    console.error("Admin login error:", error);
    return { error: "Failed to log in" };
  }
}

export async function editAdmin(formData) {
  try {
    const adminId = Number(formData.get("adminId"));
    const name = formData.get("name");
    const password = formData.get("password");
    const updateData = {
      name,
    };

    if (password && password.trim() !== "") {
      const hashed = await bcrypt.hash(password, 10);
      updateData.password = hashed;
    }

    await prisma.admin.update({
      where: { id: adminId },
      data: updateData,
    });
    revalidatePath("/admin/edituser");
    return { success: true };
  } catch (error) {
    return { error: "Failed to edit profile" };
  }
}

export async function logoutAdmin() {
  cookies().delete("admin_token");
  redirect("/adminLogin");
}
