import { formatDateLong } from "../_lib/utility";
import TableMenuButton from "./TableMenuButton";

function BookingTableRow({ booking }) {
  const {
    id,
    status,
    fullname,
    email,
    airline,
    origin,
    destination,
    departureDate,
    flightNumber,
    price,
  } = booking;
  const tax = price * 0.05;
  return (
    <tr className=" bg-bg">
      <td className="px-4 py-2 ">{flightNumber}</td>
      <td className="px-4 py-2">
        <span>{fullname}</span>
        <p className="text-fg-muted mt-1">{email}</p>
      </td>
      <td className="px-4 py-2">{airline}</td>

      <td className="px-4 py-2">
        {origin} ➝ {destination}
      </td>
      <td className="px-4 py-2">{formatDateLong(departureDate)}</td>

      <td className="px-4 py-2">
        {status === "pending" ? (
          <span className="inline-block rounded-2xl font-semibold  bg-yellow-100 text-yellow-700 px-2 py-0.5 text-xs uppercase">
            Pending
          </span>
        ) : (
          <span className="inline-block rounded-2xl font-semibold  bg-green-100 text-green-700 px-2 py-0.5 text-xs uppercase">
            Confirmed
          </span>
        )}
      </td>
      <td className="px-4 py-2">${(Number(price) + tax).toFixed(2)}</td>

      <td className="px-4 py-2 text-right">
        <TableMenuButton status={status} bookingId={id} />
      </td>
    </tr>
  );
}

export default BookingTableRow;
