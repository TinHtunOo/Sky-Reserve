import AdminBackButton from "@/app/_components/AdminBackButton";
import ConfirmBookingButton from "@/app/_components/ConfirmBookingButton";
import { getBookingById } from "@/app/_lib/data-service";
import { formatDateLong, formatTime } from "@/app/_lib/utility";
import Image from "next/image";

async function Page({ params }) {
  const bookingId = params.bookingId;
  const booking = await getBookingById(bookingId);
  const {
    airline,
    airlineLogo,
    fullname,
    status,
    email,
    origin,
    destination,
    departureDate,
    departureTime,
    price,
    bookedAt,
  } = booking;
  return (
    <div className="p-2 md:p-10 max-w-[1000px] m-auto">
      <div className="w-full text-fg bg-bg rounded-md overflow-hidden shadow">
        <div className="flex flex-wrap justify-between items-center border-b border-stroke-faint shadow shadow-brand p-3 ">
          <div className="flex items-center gap-5 ">
            <Image
              src={`/${airlineLogo}`}
              width={70}
              height={70}
              alt={airline}
              className="object-cover"
            />
            <h1 className="h2 font-semibold">{airline}</h1>
          </div>
          <div className="h4 ">
            <span>{formatDateLong(departureDate)}</span> at
            <span> {formatTime(departureTime)}</span>
          </div>
        </div>
        <div className="p-5 text-default text-fg-faint flex flex-wrap gap-2">
          <span className="text-fg">{fullname}</span> {" . "}
          <span>{email}</span>
        </div>
        <div className="flex justify-between flex-wrap gap-2 items-center p-5">
          <div className=" h4">
            <span>{origin}</span>
            {" ➝ "} <span>{destination}</span>
          </div>
          <div>
            {status === "pending" ? (
              <span className="inline-block rounded-2xl font-semibold  bg-yellow-100 text-yellow-700 px-2 py-0.5 text-xs uppercase">
                Pending
              </span>
            ) : (
              <span className="inline-block rounded-2xl font-semibold  bg-green-100 text-green-700 px-2 py-0.5 text-xs uppercase">
                Confirmed
              </span>
            )}{" "}
          </div>
        </div>

        <div className="p-5 flex justify-between flex-wrap gap-2 items-center">
          <span className="h3 font-semibold">
            ${`${Number(price).toFixed(2)}`}
          </span>{" "}
          <span className="text-sm text-fg-faint">
            Booked at {formatDateLong(bookedAt)}
            {formatTime(bookedAt)}{" "}
          </span>{" "}
        </div>
        <div className="p-5 flex justify-end gap-2 md:gap-5">
          {status === "pending" && (
            <ConfirmBookingButton bookingId={bookingId} />
          )}{" "}
          <AdminBackButton />
        </div>
      </div>
    </div>
  );
}

export default Page;
