"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

export default function GenerateFlightsButton() {
  const [loading, setLoading] = useState(false);
  const count = 50;

  async function handleGenerate() {
    setLoading(true);
    try {
      const res = await fetch("/api/generate-flights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ count }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "Failed");
      toast.success(
        `Created ${data.created || data.created?.length || count} flights`
      );
    } catch (err) {
      toast.error(err.message || "Error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <li className="border-b border-stroke-faint">
      <button
        onClick={handleGenerate}
        disabled={loading}
        className="w-full text-default flex items-center justify-start gap-2  px-10 py-5 hover:bg-gray-200  hover:text-brand-dark transition-all duration-300 "
      >
        <Plus />
        {loading ? "Generating..." : "Add Flights"}
      </button>
    </li>
  );
}
