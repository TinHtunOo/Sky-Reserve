import BookingTableRow from "./BookingTableRow";

function BookingTableBody({ bookings }) {
  return (
    <tbody className="divide-y divide-stroke font-normal text-sm">
      {bookings.map((booking) => (
        <BookingTableRow key={booking.id} booking={booking} />
      ))}
    </tbody>
  );
}

export default BookingTableBody;
