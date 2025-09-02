import { HandCoins, Plane, Ticket, Users } from "lucide-react";
import { getAllBookings, getAllFlights, getUsers } from "../_lib/data-service";

async function Stat() {
  const bookings = await getAllBookings("departureDate-asc", "all");
  const flights = await getAllFlights();
  const users = await getUsers();

  const totalSales = bookings
    .filter((booking) => booking.status === "confirmed")
    .reduce((total, booking) => {
      const price = parseFloat(booking.price);
      const tax = price * 0.05;
      return total + price + tax;
    }, 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
      <div className="rounded-2xl flex p-4 gap-5 justify-center items-center bg-white flex-wrap shadow-md">
        <div className="p-4 rounded-full bg-sky-200 text-sky-700">
          <Plane size={36} strokeWidth={1.5} />
        </div>
        <div className="grow ">
          <div className="text-sm text-fg-faint mb-2">Total Flights</div>
          <div className="h4 text-fg font-semibold">{flights.length}</div>
        </div>
      </div>
      <div className="rounded-2xl flex p-4 gap-5 justify-center flex-wrap items-center bg-white shadow-md">
        <div className="p-4 rounded-full bg-purple-200 text-purple-700">
          <Ticket size={36} strokeWidth={1.5} />
        </div>
        <div className="grow ">
          <div className="text-sm text-fg-faint mb-2">Total Bookings</div>
          <div className="h4 text-fg font-semibold">{bookings.length}</div>
        </div>
      </div>
      <div className="rounded-2xl flex p-4 gap-5 justify-center flex-wrap items-center bg-white shadow-md">
        <div className="p-4 rounded-full bg-yellow-200 text-yellow-700">
          <Users size={36} strokeWidth={1.5} />
        </div>
        <div className="grow ">
          <div className="text-sm text-fg-faint mb-2">Registered Users</div>
          <div className="h4 text-fg font-semibold">{users.length}</div>
        </div>
      </div>
      <div className="rounded-2xl flex p-4 gap-5 justify-center flex-wrap items-center bg-white shadow-md">
        <div className="p-4 rounded-full bg-green-200 text-green-700">
          <HandCoins size={36} strokeWidth={1.5} />
        </div>
        <div className="grow ">
          <div className="text-sm text-fg-faint mb-2">Sales</div>
          <div className="h4 text-fg font-semibold">
            {" "}
            $
            {totalSales.toLocaleString("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stat;
