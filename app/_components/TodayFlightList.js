import { getFlights } from "../_lib/data-service";
import TodayFlight from "./TodayFlight";

async function TodayFlightList() {
  const todayFlights = await getFlights(
    "price",
    null,
    null,
    null,
    null,
    null,
    "today",
    null,
    "one-way"
  );

  if (todayFlights.length === 0)
    return (
      <div className="p-10">
        <h2 className="h4 text-center">There is no flight today.</h2>
      </div>
    );
  return (
    <div className="overflow-x-auto  bg-white shadow-sm">
      <table className=" divide-y table-auto divide-stroke text-left font-semibold text-default w-full">
        <thead className="text-fg bg-surface">
          <tr>
            <th className="px-4 py-5 min-w-[115px]">Flight No.</th>
            <th className="px-4 py-5 min-w-[240px]">Airline</th>
            <th className="px-4 py-5 min-w-[150px]">Origin</th>

            <th className="px-4 py-5 min-w-[150px]">Destination</th>
            <th className="px-4 py-5">Departure Time</th>
            <th className="px-4 py-5">Arrival Time</th>

            <th className="px-4 py-5 min-w-[100px]">Price</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-stroke font-normal text-sm">
          {todayFlights.map((flight) => (
            <TodayFlight key={flight.id} flight={flight} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodayFlightList;
