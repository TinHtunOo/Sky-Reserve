import prisma from "./prisma";

export async function getFlights(
  sortField,
  cabinClass,
  transit,
  departureTime,
  origin,
  destination,
  departureDate,
  returnDate,
  tripType
) {
  const where = {};

  if (cabinClass) where.cabinClass = cabinClass;
  if (transit) where.stops = Number(transit);
  if (tripType === "round-trip") {
    const depWhere = {
      ...where,
      origin,
      destination,
      departureDate: departureDate
        ? departureDate.length === 10
          ? new Date(departureDate).toISOString()
          : departureDate
        : undefined,
      ...(departureTime && { departureTimeRange: departureTime }),
    };
    const retWhere = {
      ...where,
      origin: destination,
      destination: origin,
      departureDate: returnDate
        ? returnDate.length === 10
          ? new Date(returnDate).toISOString()
          : returnDate
        : undefined,
    };
    const [departures, returns] = await Promise.all([
      prisma.flights.findMany({
        where: depWhere,
        orderBy: { [sortField]: "asc" },
      }),
      prisma.flights.findMany({
        where: retWhere,
        orderBy: { [sortField]: "asc" },
      }),
    ]);
    const pairedTrips = [];
    for (const dep of departures) {
      const depDate = new Date(dep.departureDate);
      for (const ret of returns) {
        const retDate = new Date(ret.departureDate);
        if (retDate > depDate) {
          pairedTrips.push({ departure: dep, return: ret });
        }
      }
    }
    return pairedTrips;
  } else {
    if (departureTime) where.departureTimeRange = departureTime;

    if (origin) where.origin = origin;
    if (destination) where.destination = destination;
    if (departureDate === "today") {
      const now = new Date();
      const startOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );
      const endOfDay = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
      );

      where.departureDate = {
        gte: startOfDay.toISOString(),
        lt: endOfDay.toISOString(),
      };
    } else if (departureDate) {
      where.departureDate =
        departureDate.length === 10
          ? new Date(departureDate).toISOString()
          : departureDate;
    }

    if (returnDate && tripType !== "one-way") {
      where.returnDate =
        returnDate.length === 10
          ? new Date(returnDate).toISOString()
          : returnDate;
    }
    const data = await prisma.flights.findMany({
      where,
      orderBy: {
        [sortField]: "asc",
      },
    });

    return data;
  }
}

export async function getFlight(flightIds) {
  const numberIds = flightIds.map(Number);

  const flights = await prisma.flights.findMany({
    where: {
      id: {
        in: numberIds,
      },
    },
  });
  return flights;
}

export async function getFlightForBooking(flightId) {
  const flight = await prisma.flights.findMany({
    where: {
      id: flightId,
    },
  });
  return flight;
}

export async function getAllFlights(sortField = "departureDate-desc") {
  const [field, order] = sortField.split("-");

  const flights = await prisma.flights.findMany({
    orderBy: {
      [field]: order,
    },
  });
  const transformFlights = flights.map((flight) => {
    return {
      ...flight,
      id: flight.id.toString(),
      price: flight.price.toString(),
      duration: flight.duration.toString(),
    };
  });
  return transformFlights;
}

export async function getEarliestFlight(userId) {
  const booking = await prisma.bookings.findFirst({
    where: {
      user_id: userId,
    },
    include: {
      flights: true,
    },
    orderBy: {
      flights: {
        departureDate: "asc",
      },
    },
  });

  return booking?.flights || null;
}

export async function getUser(userId) {
  const user = await prisma.users.findMany({
    where: {
      id: userId,
    },
  });

  return user;
}

export async function getbookings(userId) {
  const bookings = await prisma.bookings.findMany({
    where: {
      user_id: userId,
    },
  });

  return bookings;
}

export async function getAllBookings(sortField, status) {
  const [field, order] = sortField.split("-");
  const where =
    status === "all"
      ? { status: { in: ["confirmed", "pending"] } }
      : { status };
  const bookings = await prisma.bookings.findMany({
    where,
    include: {
      flights: true,
      users: true,
    },
    orderBy:
      field === "departureDate" || field === "price"
        ? {
            flights: {
              [field]: order,
            },
          }
        : {
            [field]: order,
          },
  });

  const transformedBookings = bookings.map((booking) => ({
    id: booking.id.toString(),
    status: booking.status,
    fullname: booking.users.full_name,
    email: booking.users.email,
    airline: booking.flights.airline,
    origin: booking.flights.origin,
    destination: booking.flights.destination,
    flightNumber: booking.flights.flightNumber,
    departureDate: booking.flights.departureDate,
    price: booking.flights.price.toString(),
    created_at: booking.created_at,
  }));

  return transformedBookings;
}

export async function getBookingById(bookingId) {
  const booking = await prisma.bookings.findUnique({
    where: {
      id: Number(bookingId),
    },
  });
  if (!booking) {
    return null;
  }

  const userData = await getUser(booking.user_id);
  const flightData = await getFlightForBooking(booking.flight_id);

  return {
    id: booking.id.toString(),
    status: booking.status,
    fullname: userData[0].full_name,
    email: userData[0].email,
    airline: flightData[0].airline,
    origin: flightData[0].origin,
    destination: flightData[0].destination,
    flightNumber: flightData[0].flightNumber,
    departureDate: flightData[0].departureDate,
    airlineLogo: flightData[0].airlineLogo,
    price: flightData[0].price.toString(),
    departureTime: flightData[0].departureTime,

    bookedAt: booking.created_at,
  };
}

export async function getUsers() {
  const users = await prisma.users.findMany();

  return users;
}

export async function getAdmin(adminId) {
  const user = await prisma.admin.findMany({
    where: {
      id: adminId,
    },
  });

  return user;
}
