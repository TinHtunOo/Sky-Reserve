"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { addFlight } from "../_lib/action";

function AddFlightForm({ setShowForm }) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);
    const result = await addFlight(formData);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Flight added successfully!");
      setShowForm((show) => !show);
    }
    setLoading(false);
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4">Add New Flight</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Airline</label>
              <select
                name="airline"
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Select airline</option>
                <option value="Singapore Airlines">Singapore Airlines </option>
                <option value="Qatar Airways">Qatar Airways </option>
                <option value="Emirates">Emirates</option>
                <option value="AirAsia">AirAsia </option>
                <option value="Myanmar National Airlines">
                  Myanmar National Airlines
                </option>
                <option value="Air KBZ">Air KBZ</option>
                <option value="Myanmar Airways International">
                  Myanmar Airways International
                </option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Flight Number
              </label>
              <input
                type="text"
                name="flightNumber"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Origin</label>
              <input
                type="text"
                name="origin"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Destination
              </label>
              <input
                type="text"
                name="destination"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Origin Airport
              </label>
              <input
                type="text"
                name="originAirport"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Destination Airport
              </label>
              <input
                type="text"
                name="destinationAirport"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Departure Date
              </label>
              <input
                type="date"
                name="departureDate"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Departure Time
              </label>
              <input
                type="time"
                name="departureTime"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Arrival Time
              </label>
              <input
                type="time"
                name="arrivalTime"
                required
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Price</label>
              <input
                type="number"
                name="price"
                required
                min="0"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Stops</label>
              <input
                type="number"
                name="stops"
                required
                min="0"
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Cabin Class
              </label>
              <select
                name="cabinClass"
                required
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="Economy">Economy</option>
                <option value="Business">Business</option>
                <option value="First">First</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-2 mt-6">
            <button
              type="button"
              onClick={() => setShowForm((show) => !show)}
              className="px-4 py-2 text-gray-600 border rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 bg-brand text-white rounded-md hover:bg-brand-dark disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Flight"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddFlightForm;
