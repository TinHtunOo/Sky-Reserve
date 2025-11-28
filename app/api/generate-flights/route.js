import { NextResponse } from "next/server";
import prisma from "@/app/_lib/prisma";

/**
 * POST body: { count?: number, startDate?: string }
 * - count: how many flights to generate (default 10)
 * - startDate: ISO date string to start generating from (optional)
 *
 * Note: protect this endpoint in production (auth, env flag).
 */
export async function POST(req) {
  try {
    const { count = 10, startDate } = await req.json().catch(() => ({}));
    const n = Math.max(1, Math.min(200, Number(count))); // clamp

    const airlines = [
      "Singapore Airlines",
      "Qatar Airways",
      "Emirates",
      "Delta",
      "KLM",
      "Japan Airlines",
      "Myanmar Airways International",
      "AirAsia",
      "Air KBZ",
      "Myanmar National Airlines",
    ];
    const airports = [
      { city: "Tokyo", airport: "Narita International Airport" },
      { city: "Seoul", airport: "Incheon International Airport" },
      { city: "Singapore", airport: "Changi Airport" },
      { city: "New York", airport: "JFK International Airport" },
      { city: "Amsterdam", airport: "Schiphol Airport" },
      { city: "London", airport: "Heathrow Airport" },
      { city: "Dubai", airport: "Dubai Intl Airport" },
      { city: "Yangon", airport: "Yangon International Airport" },
    ];
    const airlineLogos = {
      "Myanmar Airways International": "mai.jpg",
      "Singapore Airlines": "singapore.svg",
      "Qatar Airways": "qatar.svg",
      Emirates: "emirates.svg",
      AirAsia: "airasia.svg",
      "Air KBZ": "airkbz.png",
      "Myanmar National Airlines": "mna.jpg",
      Delta: "delta-logo.png",
      KLM: "klm-logo.png",
      "Japan Airlines": "japan-airlines-logo.png",
    };
    const baseDate = startDate ? new Date(startDate) : new Date();
    baseDate.setHours(0, 0, 0, 0);

    const generated = [];
    for (let i = 0; i < n; i++) {
      const lastFlight = await prisma.flights.findFirst({
        orderBy: {
          id: "desc",
        },
      });
      const airline = airlines[Math.floor(Math.random() * airlines.length)];
      const airlineLogo = airlineLogos[airline];
      // pick two different cities
      let a = Math.floor(Math.random() * airports.length);
      let b = Math.floor(Math.random() * airports.length);
      while (b === a) b = Math.floor(Math.random() * airports.length);

      const origin = airports[a].city;
      const destination = airports[b].city;

      const departureDate = new Date(baseDate);
      departureDate.setDate(
        baseDate.getDate() + Math.floor(Math.random() * 30)
      ); // within 30 days
      // random departure time within day
      const depHour = 1 + Math.floor(Math.random() * 22);
      const depMin = [0, 15, 30, 45][Math.floor(Math.random() * 4)];
      const departureTime = new Date(departureDate);
      departureTime.setHours(depHour, depMin, 0, 0);

      const duration = 60 + Math.floor(Math.random() * 600); // minutes
      const arrivalTime = new Date(departureTime);
      arrivalTime.setMinutes(arrivalTime.getMinutes() + duration);

      const price = Math.floor(50 + Math.random() * 950); // 50 - 999

      generated.push({
        id: lastFlight ? lastFlight.id + 1 : 1,
        airline,
        airlineLogo,
        origin,
        destination,
        originAirport: airports[a].airport,
        destinationAirport: airports[b].airport,
        departureDate: departureDate,
        departureTime: departureTime,
        departureTimeRange:
          depHour < 6
            ? "early"
            : depHour < 12
            ? "morning"
            : depHour < 18
            ? "afternoon"
            : "evening",
        arrivalTime: arrivalTime,
        arrivalDate: arrivalTime,
        price,
        stops: Math.random() < 0.7 ? 0 : 1,
        duration,
        boardingTime: new Date(departureTime.getTime() - 30 * 60000), // 30 minutes before
        flightNumber: `${airline
          .split(" ")
          .map((w) => w[0])
          .join("")
          .toUpperCase()}${100 + Math.floor(Math.random() * 900)}`,
        cabinClass: ["Economy", "Business"][Math.floor(Math.random() * 2)],
      });
    }

    // createMany for performance (IDs are auto-incremented by Prisma)
    await prisma.flights.createMany({
      data: generated,
      skipDuplicates: true,
    });

    return NextResponse.json({ success: true, created: generated.length });
  } catch (err) {
    console.error("generate-flights error:", err);
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
