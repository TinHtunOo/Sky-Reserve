import { formatDateLong, formatTime } from "../_lib/utility";
import FlightTableButton from "./FlightTableButton";

function FlightTableRow({ flight }) {
  const {
    id,
    flightNumber,
    airline,
    origin,
    destination,
    departureTime,
    arrivalTime,
    departureDate,
    price,
  } = flight;
  return (
    <tr className=" bg-bg">
      <td className="px-4 py-2 font-medium">{flightNumber}</td>
      <td className="px-4 py-2">{airline}</td>
      <td className="px-4 py-2">{origin}</td>

      <td className="px-4 py-2">{destination}</td>
      <td className="px-4 py-2">{formatTime(departureTime)}</td>
      <td className="px-4 py-2">{formatTime(arrivalTime)}</td>

      <td className="px-4 py-2">{formatDateLong(departureDate)}</td>
      <td className="px-4 py-2 text-right">$ {Number(price).toFixed(2)}</td>

      <td className="px-4 py-2 text-right">
        <FlightTableButton flightId={id} />
      </td>
    </tr>
  );
}

export default FlightTableRow;
