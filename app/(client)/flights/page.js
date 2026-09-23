import FilterPanel from "@/app/_components/FilterPanel";
import SortDropdown from "@/app/_components/SortDropdown";
import FlightList from "@/app/_components/FlightList";
import SearchFlight from "@/app/_components/SearchFlight";
import Link from "next/link";
import { getCurrentUser } from "@/app/_lib/auth";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinner";
import { getSearchCookie } from "@/app/_lib/searchCookie";
import { redirect } from "next/navigation";
export const metadata = {
  title: "Flights",
};

export default async function Page({ searchParams }) {
  const sp = await searchParams;
  const hasParams = sp && Object.keys(sp).length > 0;

  if (!hasParams) {
    const saved = await getSearchCookie();
    if (saved && Object.keys(saved).length > 0) {
      const query = new URLSearchParams(saved).toString();
      redirect(`/flights?${query}`);
    }
  }

  const sortField = sp?.sortField || "price";
  const cabinClass = sp?.cabinClass || "";
  const transit = sp?.transit || "";
  const departureTime = sp?.departureTime || "";
  const origin = sp?.origin || "Yangon";
  const destination = sp?.destination || "Bangkok";
  const departureDate = sp?.departureDate || "";
  const returnDate = sp?.returnDate || "";
  const tripType = sp?.tripType || "one-way";
  const user = await getCurrentUser();
  const searchKey = JSON.stringify({
    sortField,
    cabinClass,
    transit,
    departureTime,
    origin,
    destination,
    departureDate,
    returnDate,
    tripType,
  });
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <SearchFlight initialSearch={sp} />
      {user ? (
        ""
      ) : (
        <h4
          className="text-center p-3 h4 tracking-wider"
          style={{ wordSpacing: "0.3em" }}
        >
          Please{" "}
          <Link href="/signin" className="underline text-brand cursor-pointer">
            login
          </Link>{" "}
          first to select the flights.
        </h4>
      )}

      <div className="px-4 md:px-8  py-6 grid grid-cols-1 md:grid-cols-[250px_1fr] gap-0 md:gap-6 ">
        <aside>
          <FilterPanel />
        </aside>
        <section>
          <div className="flex flex-wrap justify-between pb-4  items-center border-b border-stroke-faint">
            <h1 className="h2 semi-bold py-3">Available Flights</h1>
            <SortDropdown />
          </div>
          <div className="overflow-y-auto  mt-4">
            <Suspense fallback={<Spinner />} key={searchKey}>
              <FlightList
                sortField={sortField}
                cabinClass={cabinClass}
                transit={transit}
                departureTime={departureTime}
                origin={origin}
                destination={destination}
                departureDate={departureDate}
                returnDate={returnDate}
                tripType={tripType}
              />
            </Suspense>
          </div>
        </section>
      </div>
    </div>
  );
}
