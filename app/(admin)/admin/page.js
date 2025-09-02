import Stat from "@/app/_components/Stat";
import TodayFlightTable from "@/app/_components/TodayFlightTable";

function page() {
  return (
    <div className="p-2 sm:px-10 overflow-y-auto">
      <h1 className="h2 font-semibold text-fg mb-1">DashBoard</h1>
      <Stat />
      <TodayFlightTable />
    </div>
  );
}

export default page;
