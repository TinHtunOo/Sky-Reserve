import { MoveRight } from "lucide-react";
import Image from "next/image";
import { getFlightForBooking } from "../_lib/data-service";
import { formatDateLong, formatTime } from "../_lib/utility";
import Link from "next/link";
import DeleteBookingButton from "./DeleteBookingButton";

async function Booking({ flightId, status, bookingId }) {
  const flight = await getFlightForBooking(flightId);
  const {
    airlineLogo,
    airline,
    origin,
    destination,
    originAirport,
    departureDate,
    departureTime,
    price,
  } = flight.at(0);
  const tax = price * 0.05;
  return (
    <div className="flex md:p-2 p-0 items-center justify-between  border-b border-stroke-faint mb-5">
      <div className="grow pb-2">
        <div className="flex">
          <Image
            src={`/${airlineLogo}`}
            alt={airline}
            className="object-cover hidden md:block hide-below-890"
            width={80}
            height={80}
          />
          <div className="grow px-2 md:ml-5 ml-0 space-y-2 ">
            <div className="flex justify-between items-center flex-wrap gap-2">
              <div className="flex">
                <h3 className="sm:h3 h4 font-semibold">{origin}</h3>
                <MoveRight />
                <h3 className="sm:h3 h4 font-semibold">{destination}</h3>
              </div>
              {status === "pending" ? (
                <p className="px-2.5 py-1  rounded-2xl bg-yellow-200 text-yellow-700 uppercase text-xs font-semibold">
                  {status}
                </p>
              ) : (
                <p className="px-2.5 py-1  rounded-2xl bg-green-200 text-green-700 uppercase text-xs font-semibold">
                  {status}
                </p>
              )}
            </div>
            <div className="text-default text-fg-muted flex justify-between items-center flex-wrap">
              <p>{originAirport}</p>
              <p>
                {formatDateLong(departureDate)} at {formatTime(departureTime)}
              </p>
            </div>
            <div className="text-default text-fg-muted flex justify-between items-center flex-wrap">
              <h3 className="h3 font-semibold text-brand-dark">
                ${(Number(price) + tax).toFixed(2)}
              </h3>
              <div className="text-fg space-x-1">
                {status === "pending" && (
                  <DeleteBookingButton bookingId={bookingId} />
                )}
                <Link
                  href={`/account/mybooking/${flightId}`}
                  className="px-2 py-1  rounded-md text-bg border-2 border-brand  bg-brand hover:bg-brand-dark"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
