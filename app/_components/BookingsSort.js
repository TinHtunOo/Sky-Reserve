import SortByAdmin from "./SortByAdmin";

function BookingsSort() {
  return (
    <div className="text-sm">
      <SortByAdmin
        options={[
          { value: "departureDate-desc", label: "Sort by date (latest first)" },
          { value: "departureDate-asc", label: "Sort by date (earlier first)" },
          {
            value: "price-desc",
            label: "Sort by amount (high first)",
          },
          { value: "price-asc", label: "Sort by amount (low first)" },
        ]}
      />
    </div>
  );
}

export default BookingsSort;
