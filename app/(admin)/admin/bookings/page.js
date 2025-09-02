import BookingsFilter from "@/app/_components/BookingsFilter";
import BookingsSort from "@/app/_components/BookingsSort";
import BookingTable from "@/app/_components/BookingTable";
import { getAllBookings } from "@/app/_lib/data-service";

async function page({ searchParams }) {
  const sortField = searchParams?.sortField || "departureDate-desc";
  const status = searchParams?.bookingStatus || "all";

  const bookings = await getAllBookings(sortField, status);
  return (
    <div className="p-2 sm:px-10 overflow-y-auto">
      <div className="block sm:flex justify-center sm:justify-between items-center flex-wrap ">
        <h1 className="h2 font-semibold text-fg mb-1">Bookings</h1>
        <div className="sm:flex block items-center gap-2 space-y-2 mt-3 sm:mt-0 sm:space-y-0 flex-wrap">
          <BookingsFilter />
          <BookingsSort />
        </div>
      </div>
      <BookingTable bookings={bookings} />
    </div>
  );
}

export default page;
