import TodayFlightList from "./TodayFlightList";

function TodayFlightTable() {
  return (
    <div className="bg-bg mt-5 shadow-md">
      <h3 className="h3 font-semibold p-3">Today Flights</h3>
      <div className="w-full">
        <TodayFlightList />
      </div>
    </div>
  );
}

export default TodayFlightTable;
