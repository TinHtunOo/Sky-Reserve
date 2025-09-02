import Image from "next/image";
import Link from "next/link";
import { formatDateLong, formatTime } from "../_lib/utility";
import { getCurrentUser } from "../_lib/auth";

export default async function OneWayFlightCard({ flight }) {
  const user = await getCurrentUser();
  const {
    id,
    airline,
    airlineLogo,
    destination,
    origin,
    departureTime,
    departureDate,
    arrivalTime,
    arrivalDate,
    stops,
    duration,
    price,
  } = flight;

  return (
    <div className="border max-w-[700px] min-h-[100px] border-stroke rounded-2xl p-2 sm:p-6 shadow-sm bg-white mx-auto">
      <div className="flex items-center  justify-between gap-3 border-b border-stroke-faint pb-2">
        <div className=" grow space-y-5 ">
          <div className="flex">
            <Image
              src={`/${airlineLogo}`}
              alt={airline}
              className="object-cover hidden sm:block"
              width={60}
              height={60}
              priority
            />
            <div className="grow flex items-center gap-3 justify-between px-2 ">
              <div>
                <h3 className="sm:h3 h4 font-semibold">
                  {formatTime(departureTime)}
                </h3>
                <p className="text-fg-muted text-small">{origin}</p>
                <p className="text-fg-muted hidden sm:block text-small ">
                  {formatDateLong(departureDate)}
                </p>
              </div>
              <div className="grow text-center">
                <p className="text-fg-muted text-small">
                  {" "}
                  {Math.floor(duration / 60)}h {duration % 60}m{" "}
                </p>
                <div className="w-full border border-stroke-faint my-1"></div>
                <p className="text-fg-muted text-small">
                  {flight.stops === 0
                    ? "Direct"
                    : `${stops} stop${stops > 1 ? "s" : ""}`}
                </p>
              </div>
              <div className="text-end">
                <h3 className="sm:h3 h4 font-semibold">
                  {formatTime(arrivalTime)}
                </h3>
                <p className="text-fg-muted text-small">{destination}</p>
                <p className="text-fg-muted hidden sm:block text-small ">
                  {formatDateLong(arrivalDate)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-between items-center gap-3 mt-2">
        <p className="md:text-3xl grow text-base  text-orange-400 font-semibold ">
          $ {`${price}`}.00
        </p>

        {user ? (
          <Link
            href={`flights/${id}`}
            className="rounded-md shadow  bg-brand text-white hover:bg-brand-dark text-xs sm:text-base p-1 sm:px-4 sm:py-2"
          >
            Select
          </Link>
        ) : (
          <Link
            href={`signin`}
            className="rounded-md shadow  bg-brand text-white hover:bg-brand-dark text-xs sm:text-base p-1 sm:px-4 sm:py-2"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
}
