import Button from "@/app/_components/Button";

export const metadata = {
  title: "Thank You",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[80vh] flex flex-col justify-center   items-center text-center sm:text-start px-4">
      <div className="bg-background p-6 md:p-10 rounded-2xl shadow max-w-2xl w-full ">
        <h1 className="h1 font-semibold text-brand-dark mb-10">
          Thank You for Your Booking!
        </h1>
        <p className="text-default text-fg-muted mb-10">
          Your flight has been successfully reserved.
          <br /> We will send a confirmation email with your ticket details.
        </p>
        <Button direction={"/flights"} size="big">
          Explore More Flights
        </Button>
      </div>
    </div>
  );
}
