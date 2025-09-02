import BookingDetail from "@/app/_components/BookingDetail";
import { getCurrentUser } from "@/app/_lib/auth";
import { getFlightForBooking, getUser } from "@/app/_lib/data-service";

async function page({ params }) {
  const user = await getCurrentUser();
  const flightId = params.flightId;
  const flight = await getFlightForBooking(Number(flightId));
  const passenger = await getUser(user.id);
  const { full_name } = passenger.at(0);
  return (
    <div>
      <BookingDetail flight={flight.at(0)} name={full_name} />
    </div>
  );
}

export default page;
