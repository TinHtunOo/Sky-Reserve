"use client";
import { useState } from "react";
import FlightTableBody from "./FlightTableBody";
import Pagination from "./Pagination";

function FlightTable({ flights }) {
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(flights.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedFlights = flights.slice(startIndex, startIndex + itemsPerPage);
  return (
    <div className="w-full">
      <div className="overflow-x-auto  bg-white shadow-sm mt-5">
        <table className=" divide-y table-auto divide-stroke text-left font-semibold text-default w-full">
          <thead className="bg-gray-50 text-fg">
            <tr>
              <th className="px-4 py-5 min-w-[115px]">Flight No.</th>
              <th className="px-4 py-5 min-w-[240px]">Airline</th>
              <th className="px-4 py-5 min-w-[150px]">Origin</th>

              <th className="px-4 py-5 min-w-[150px]">Destination</th>
              <th className="px-4 py-5">Departure Time</th>
              <th className="px-4 py-5">Arrival Time</th>
              <th className="px-4 py-5 min-w-[130px]">Date</th>

              <th className="px-4 py-5 min-w-[100px]">Price</th>

              <th className="px-4 py-5 "></th>
            </tr>
          </thead>
          <FlightTableBody flights={paginatedFlights} />
        </table>
      </div>
      <Pagination
        startIndex={startIndex}
        itemsPerPage={itemsPerPage}
        count={flights.length}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default FlightTable;
