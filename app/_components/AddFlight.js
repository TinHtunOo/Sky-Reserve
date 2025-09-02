"use client";

import { useState } from "react";
import AddFlightForm from "./AddFlightForm";

function AddFlight() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      {showForm && <AddFlightForm setShowForm={setShowForm} />}
      <button
        onClick={() => setShowForm((show) => !show)}
        className="py-2 rounded-lg px-4 uppercase bg-brand hover:bg-brand-dark cursor-pointer text-bg"
      >
        Add Flight
      </button>
    </>
  );
}

export default AddFlight;
