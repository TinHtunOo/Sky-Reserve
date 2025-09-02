import UpComingFlight from "@/app/_components/UpComingFlight";
import { getCurrentUser } from "@/app/_lib/auth";
import { getbookings, getUser } from "@/app/_lib/data-service";
import { formatDateLong } from "@/app/_lib/utility";

async function page() {
  const user = await getCurrentUser();
  const passenger = await getUser(user.id);
  const { full_name, email, created_at } = passenger.at(0);
  const bookings = await getbookings(user.id);

  return (
    <div>
      <div className="mb-5">
        <h2 className="h2 mb-2 text-brand-dark">Hello, {full_name}</h2>
        <p className="text-default text-fg">
          Welcome back! Here’s a quick overview of your account activity and
          travel profile.
        </p>
      </div>
      <div className="mb-5">
        <h3 className="h3 text-brand-dark">Profile Summary</h3>
        <table className="w-full text-left border-collapse text-default text-fg">
          <tbody>
            <tr className="border-b border-stroke-faint">
              <td className="py-2 w-[50%] ">Name:</td>
              <td className="py-2 ">{full_name}</td>
            </tr>
            <tr className="border-b border-stroke-faint">
              <td className="py-2">Email:</td>
              <td className="py-2 ">{email}</td>
            </tr>
            <tr className="border-b border-stroke-faint">
              <td className="py-2 ">Member Since:</td>
              <td className="py-2 ">{formatDateLong(created_at)}</td>
            </tr>

            <tr>
              <td className="py-2  ">Total Bookings:</td>
              <td className="py-2 ">{bookings.length}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {!bookings.length < 1 ? (
        <UpComingFlight userId={user.id} />
      ) : (
        <div className="mb-5">
          <h3 className="h3 text-brand-dark">No Upcoming Trips</h3>
          <p className="text-default text-fg">
            You don&apos;t have any upcoming flights booked.
          </p>
        </div>
      )}
    </div>
  );
}

export default page;
