import BackButton from "@/app/_components/BackButton";
import ConfirmButton from "@/app/_components/ConfirmButton";
import FlightDetail from "@/app/_components/FlightDetail";
import NotFount from "@/app/_components/NotFount";
import { getCurrentUser } from "@/app/_lib/auth";
import { getFlight, getUser } from "@/app/_lib/data-service";

export const metadata = {
  title: "Flight Detail",
};

export default async function Page({ params }) {
  const user = await getCurrentUser();
  if (!user) return <NotFount />;
  const flightId = params.flightId;
  const flightIds = flightId.includes("-") ? flightId.split("-") : [flightId];
  const flights = await getFlight(flightIds);
  const isRoundTrip = flights.length === 2;
  const totalPrice = flights.reduce(
    (acc, flight) => acc + Number(flight.price),
    0
  );
  const tax = totalPrice * 0.05;
  const passenger = await getUser(user.id);
  return (
    <div className="relative max-w-[600px] mx-auto p-4 mt-30  mb-5">
      <table className="w-full text-left border-collapse text-default text-fg">
        <tbody>
          <tr className="border-b border-stroke-faint">
            <td className="py-2 w-[50%]">Passenger:</td>
            <td className="py-2 ">{passenger.at(0).full_name}</td>
          </tr>
          {flights.map((flight, index) => (
            <FlightDetail
              key={flight.id}
              index={index}
              flight={flight}
              isRoundTrip={isRoundTrip}
            />
          ))}
        </tbody>
      </table>

      <table className="w-full text-left border-collapse text-default text-fg">
        <tbody>
          <tr>
            <td className="py-2 w-[50%]"></td>
          </tr>
          <tr>
            <td className="py-2 w-[50%] h4">Price Summary</td>
          </tr>
          <tr className="border-b border-stroke-faint">
            <td className="py-2 w-[50%]"></td>
          </tr>
          <tr className="border-b border-stroke-faint">
            <td className="py-2  text-fg-muted">Flight {isRoundTrip && 1}:</td>
            <td className="py-2 ">${flights.at(0).price.toFixed(2)}</td>
          </tr>
          {isRoundTrip && (
            <tr className="border-b border-stroke-faint">
              <td className="py-2  text-fg-muted">Flight 2:</td>
              <td className="py-2 ">${flights.at(1)?.price.toFixed(2)}</td>
            </tr>
          )}
          <tr className="border-b border-stroke-faint">
            <td className="py-2  text-fg-muted">Tax(5%):</td>
            <td className="py-2 ">${tax.toFixed(2)}</td>
          </tr>
          <tr>
            <td className="py-2  ">Total Price:</td>
            <td className="py-2 h4 font-semibold text-brand-dark">
              ${(totalPrice + tax).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-end space-x-5 mt-10 ">
        <BackButton />
        <ConfirmButton flightIds={flightIds} userId={user.id} />
      </div>
    </div>
  );
}
