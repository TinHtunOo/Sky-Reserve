"use client";

import toast from "react-hot-toast";
import { confirmBooking } from "../_lib/action";

function ConfirmBookingButton({ bookingId }) {
  async function handleConfirm(bookingId) {
    const result = await confirmBooking(bookingId);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Booking confirmed successfully!");
    }
  }
  return (
    <button
      onClick={() => handleConfirm(bookingId)}
      className="py-2 px-4 uppercase text-default rounded-md bg-brand hover:bg-brand-dark cursor-pointer text-bg"
    >
      Confirm Booking
    </button>
  );
}

export default ConfirmBookingButton;
