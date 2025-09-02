import MyBookingList from "@/app/_components/MyBookingList";

function page() {
  return (
    <div>
      <div>
        <h2 className="h2 mb-2 text-brand-dark">My Bookings</h2>
        <p className="text-default text-fg">
          Keep track of all your future flights in one place.
        </p>
      </div>
      <div className="md:p-5 px-0 py-2 my-5">
        <MyBookingList />
      </div>
    </div>
  );
}

export default page;
