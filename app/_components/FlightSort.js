import SortByAdmin from "./SortByAdmin";

function FlightSort() {
  return (
    <div className="text-sm">
      <SortByAdmin
        options={[
          {
            value: "departureDate-desc",
            label: "Sort by departureDate (latest first)",
          },
          {
            value: "departureDate-asc",
            label: "Sort by departureDate (earlier first)",
          },
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

export default FlightSort;
