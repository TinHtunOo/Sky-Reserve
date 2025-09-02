import AddFlight from "@/app/_components/AddFlight";
import FlightSort from "@/app/_components/FlightSort";
import FlightTable from "@/app/_components/FlightTable";
import { getAllFlights } from "@/app/_lib/data-service";

async function page({ searchParams }) {
  const sortField = searchParams?.sortField || "departureDate-desc";

  const flights = await getAllFlights(sortField);
  return (
    <div className="p-2 sm:px-10 space-y-2">
      <div className="block sm:flex justify-center sm:justify-between items-center flex-wrap ">
        <h1 className="h2 font-semibold text-fg">Flights</h1>
        <div className="sm:flex block items-center gap-5 flex-wrap">
          <FlightSort />
        </div>
      </div>
      <FlightTable flights={flights} />
      <AddFlight />
    </div>
  );
}

export default page;
