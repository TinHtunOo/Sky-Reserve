import AdminBackButton from "@/app/_components/AdminBackButton";
import { getFlightForBooking } from "@/app/_lib/data-service";
import { formatDateLong, formatTime } from "@/app/_lib/utility";

async function Page({ params }) {
  const flightId = params.flightId;
  const flight = await getFlightForBooking(Number(flightId));
  const {
    id,
    airline,
    origin,
    destination,
    flightNumber,
    originAirport,
    departureDate,
    departureTime,
    boardingTime,
    cabinClass,
    price,
  } = flight.at(0);
  return (
    <div className="p-2 sm:px-10 overflow-y-auto">
      <h1 className="h2 font-semibold text-fg">Flight Detail #{id}</h1>
      <div className="relative max-w-[900px] mx-auto p-4 mt-5 bg-bg rounded-2xl shadow  mb-5">
        <table className="w-full text-left border-collapse text-default text-fg">
          <tbody>
            <tr className="border-b border-stroke-faint">
              <td className="py-2 text-fg-muted w-[50%]">Airline:</td>
              <td className="py-2 ">{airline}</td>
            </tr>
            <tr className="border-b border-stroke-faint">
              <td className="py-2 text-fg-muted">Flight:</td>
              <td className="py-2 ">
                {origin} → {destination}
              </td>
            </tr>
            <tr className="border-b border-stroke-faint">
              <td className="py-2 text-fg-muted ">Flight Number:</td>
              <td className="py-2 ">{flightNumber}</td>
            </tr>
            <tr className="border-b border-stroke-faint">
              <td className="py-2  text-fg-muted">Airport:</td>
              <td className="py-2 ">{originAirport}</td>
            </tr>
            <tr className="border-b border-stroke-faint">
              <td className="py-2 text-fg-muted">Departure Date:</td>
              <td className="py-2 ">{formatDateLong(departureDate)} </td>
            </tr>
            <tr className="border-b border-stroke-faint">
              <td className="py-2 text-fg-muted">Departure Time:</td>
              <td className="py-2 ">{formatTime(departureTime)} </td>
            </tr>
            <tr className="border-b border-stroke-faint">
              <td className="py-2 text-fg-muted">Boarding Time:</td>
              <td className="py-2 ">{formatTime(boardingTime)}</td>
            </tr>
            <tr className="border-b border-stroke-faint">
              <td className="py-2  text-fg-muted">Class:</td>
              <td className="py-2 ">{cabinClass}</td>
            </tr>
            <tr>
              <td className="py-2  text-fg-muted">Price:</td>
              <td className="py-2 ">${Number(price).toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
        <div className="flex justify-end">
          <AdminBackButton />
        </div>
      </div>
    </div>
  );
}

export default Page;
