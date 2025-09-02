import { formatDateLong, formatTime } from "../_lib/utility";

function FlightDetail({ flight, index, isRoundTrip }) {
  const {
    airline,
    origin,
    originAirport,
    destination,
    departureDate,
    departureTime,
    flightNumber,
    boardingTime,
    price,
    cabinClass,
  } = flight;
  return (
    <>
      <tr>
        <td className="py-2 w-[50%]"></td>
      </tr>
      <tr>
        <td className="py-2 w-[50%] h4">
          Flight {isRoundTrip ? index + 1 : ""}
        </td>
      </tr>
      <tr className="border-b border-stroke-faint">
        <td className="py-2 w-[50%]"></td>
      </tr>
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
        <td className="py-2 ">${price.toFixed(2)}</td>
      </tr>
    </>
  );
}

export default FlightDetail;
