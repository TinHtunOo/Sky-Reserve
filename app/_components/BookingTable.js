"use client";

import { useState } from "react";
import BookingTableBody from "./BookingTableBody";
import Pagination from "./Pagination";

function BookingTable({ bookings }) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(bookings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBookings = bookings.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="w-full">
      <div className="overflow-x-auto  bg-white shadow-sm mt-5">
        <table className=" divide-y table-auto divide-stroke text-left font-semibold text-default w-full">
          <thead className="bg-gray-50 text-fg">
            <tr>
              <th className="px-4 py-5 min-w-[120px]">Flight No.</th>
              <th className="px-4 py-5 min-w-[200px]">Passenger</th>
              <th className="px-4 py-5 min-w-[180px]">Airline</th>

              <th className="px-4 py-5 min-w-[200px]">Flight</th>
              <th className="px-4 py-5 min-w-[130px]">Date</th>
              <th className="px-4 py-5 ">Status</th>
              <th className="px-4 py-5 ">Price</th>

              <th className="px-4 py-5"></th>
            </tr>
          </thead>
          <BookingTableBody bookings={paginatedBookings} />
        </table>
      </div>
      <Pagination
        startIndex={startIndex}
        itemsPerPage={itemsPerPage}
        count={bookings.length}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default BookingTable;
