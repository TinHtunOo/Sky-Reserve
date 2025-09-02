"use client";

import { createBooking } from "../_lib/action";

function ConfirmButton({ flightIds, userId }) {
  return (
    <button
      onClick={() => createBooking(flightIds, userId)}
      className="py-2 px-4 text-sm md:text-base rounded-md text-bg bg-brand hover:bg-brand-dark cursor-pointer uppercase"
    >
      Confirm
    </button>
  );
}

export default ConfirmButton;
