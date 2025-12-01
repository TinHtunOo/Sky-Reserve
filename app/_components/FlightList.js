import OneWayFlightCard from "./OneWayFlightCard";
import { getFlights } from "../_lib/data-service";
import RoundFlightCard from "./RoundFlightCard";

async function FlightList({
  sortField,
  cabinClass,
  transit,
  departureTime,
  origin,
  destination,
  departureDate,
  returnDate,
  tripType,
}) {
  const flights = await getFlights(
    sortField,
    cabinClass,
    transit,
    departureTime,
    origin,
    destination,
    departureDate,
    returnDate,
    tripType
  );
  if (!flights || flights.length === 0) {
    return (
      <div className="text-center p-8 bg-surface rounded-lg shadow">
        <h3 className="text-xl font-semibold text-brand-dark mb-2">
          No Flights Found
        </h3>
        <p className="text-fg-muted">
          Sorry, we couldn&apos;t find any flights matching your criteria. Try
          adjusting your search parameters or <br />{" "}
          <span className=" text-black  ">
            clear the date field and search again.
          </span>
        </p>
      </div>
    );
  }
  return (
    <div className="space-y-4">
      {tripType === "round-trip"
        ? flights.map((pair, idx) => (
            <RoundFlightCard
              key={idx}
              departure={pair.departure}
              returnFlight={pair.return}
            />
          ))
        : flights.map((flight) => (
            <OneWayFlightCard key={flight.id} flight={flight} />
          ))}
    </div>
  );
}

export default FlightList;
