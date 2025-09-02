import FlightTableRow from "./FlightTableRow";

function FlightTableBody({ flights }) {
  return (
    <tbody className="divide-y divide-stroke font-normal text-sm">
      {flights.map((flight) => (
        <FlightTableRow key={flight.id} flight={flight} />
      ))}
    </tbody>
  );
}

export default FlightTableBody;
