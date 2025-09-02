import { getCurrentUser } from "../_lib/auth";
import { getbookings } from "../_lib/data-service";
import Booking from "./Booking";

async function MyBookingList() {
  const user = await getCurrentUser();

  const bookings = await getbookings(user.id);
  if (bookings.length < 1)
    return (
      <h4 className="text-center h4 mt-20">
        You haven&apos;t booked any flight yet!{" "}
      </h4>
    );
  return (
    <div>
      {bookings.map((booking) => (
        <Booking
          key={booking.id}
          bookingId={booking.id}
          flightId={booking.flight_id}
          status={booking.status}
        />
      ))}
    </div>
  );
}

export default MyBookingList;
