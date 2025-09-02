import { Eye, Trash } from "lucide-react";
import { deleteFlight } from "../_lib/action";
import toast from "react-hot-toast";
import Link from "next/link";

function FlightTableButton({ flightId }) {
  async function handleDelete(flightId) {
    const result = await deleteFlight(flightId);
    if (result?.error) {
      toast.error(result.error);
    } else {
      toast.success("Flight deleted successfully!");
    }
  }
  return (
    <div className="flex items-center justify-center gap-5">
      <div className="relative group">
        <Link
          href={`flightsadmin/${flightId}`}
          className="p-1 block rounded-md border border-stroke-faint cursor-pointer bg-sky-100 text-sky-700"
        >
          <Eye size={16} strokeWidth={1.5} />
        </Link>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
          View Detail
        </div>
      </div>

      <div className="relative group">
        <button
          onClick={() => handleDelete(flightId)}
          className="p-1 rounded-md border border-stroke-faint cursor-pointer bg-red-100 text-red-700"
        >
          <Trash size={16} strokeWidth={1.5} />
        </button>
        <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10">
          Delete
        </div>
      </div>
    </div>
  );
}

export default FlightTableButton;
