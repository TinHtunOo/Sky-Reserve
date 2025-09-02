import FilterAdmin from "./FilterAdmin";

function BookingsFilter() {
  return (
    <div className=" text-sm ">
      <FilterAdmin
        filterField="bookingStatus"
        options={[
          { value: "all", label: "All" },
          { value: "confirmed", label: "Confirmed" },
          { value: "pending", label: "Pending" },
        ]}
      />
    </div>
  );
}

export default BookingsFilter;
