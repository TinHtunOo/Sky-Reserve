import { formatTime } from "../_lib/utility";

function TodayFlight({ flight }) {
  const {
    flightNumber,
    airline,
    origin,
    destination,
    departureTime,
    arrivalTime,
    price,
  } = flight;
  return (
    <tr className=" bg-bg">
      <td className="px-4 py-5 font-medium">{flightNumber}</td>
      <td className="px-4 py-5">{airline}</td>
      <td className="px-4 py-5">{origin}</td>

      <td className="px-4 py-5">{destination}</td>
      <td className="px-4 py-5">{formatTime(departureTime)}</td>
      <td className="px-4 py-5">{formatTime(arrivalTime)}</td>

      <td className="px-4 py-5 text-right">$ {Number(price).toFixed(2)}</td>
    </tr>
  );
}

export default TodayFlight;
