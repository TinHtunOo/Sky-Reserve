import { getEarliestFlight } from "../_lib/data-service";
import { formatDateLong, formatTime } from "../_lib/utility";
import Button from "./Button";

async function UpComingFlight({ userId }) {
  const upcomingFlight = await getEarliestFlight(userId);
  const {
    airline,
    origin,
    destination,
    departureDate,
    departureTime,
    originAirport,
  } = upcomingFlight;
  return (
    <div className="mb-5">
      <h3 className="h3 text-brand-dark">Upcoming Trip</h3>
      <table className="w-full text-left border-collapse text-default text-fg">
        <tbody>
          <tr className="border-b border-stroke-faint">
            <td className="py-2  w-[50%]">Airline:</td>
            <td className="py-2 ">{airline}</td>
          </tr>
          <tr className="border-b border-stroke-faint">
            <td className="py-2">Flight:</td>
            <td className="py-2 ">
              {origin} → {destination}
            </td>
          </tr>
          <tr className="border-b border-stroke-faint">
            <td className="py-2 ">Departure:</td>
            <td className="py-2 ">
              {formatDateLong(departureDate)} at {formatTime(departureTime)}
            </td>
          </tr>

          <tr className="border-b border-stroke-faint">
            <td className="py-2  ">Airport:</td>
            <td className="py-2 ">{originAirport}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center sm:text-start mt-7">
        <Button direction="/account/mybooking" size="big">
          View My Bookings
        </Button>
      </div>
    </div>
  );
}

export default UpComingFlight;
