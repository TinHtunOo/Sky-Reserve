"use client";

import { useRouter } from "next/navigation";
import { deleteBooking } from "../_lib/action";
import toast from "react-hot-toast";

function DeleteBookingButton({ bookingId }) {
  const router = useRouter();

  async function handleDelete() {
    const result = await deleteBooking(bookingId);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Booking deleted successfully");
      router.refresh();
    }
  }
  return (
    <button
      onClick={handleDelete}
      className="px-2 py-1 cursor-pointer  rounded-md text-bg border-2 border-red  bg-red-600 hover:bg-red-400"
    >
      Delete
    </button>
  );
}

export default DeleteBookingButton;
