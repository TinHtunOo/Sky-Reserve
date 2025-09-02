import { Search, CheckCircle, Ticket } from "lucide-react";

const highlights = [
  {
    title: "Search Flights",
    description:
      "Quickly find flights by destination, date, and price from hundreds of airlines.",
    icon: Search,
  },
  {
    title: "Choose & Book",
    description:
      "Compare and select the best option, then book in just a few clicks.",
    icon: CheckCircle,
  },
  {
    title: "Get E-Ticket",
    description:
      "Receive your e-ticket instantly via email or access it anytime on your dashboard.",
    icon: Ticket,
  },
];

function FastBooking() {
  return (
    <section className="py-15 px-4 bg-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-start mb-10">
          <h2 className="h2 text-fg mb-3">Fast & Easy Booking</h2>
          <p className="text-default text-fg-faint md:mx-0 max-w-xl mx-auto">
            Booking your next flight is as easy as 1-2-3 with SKY|RESERVE.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-stroke-faint p-6 hover:shadow-sm transition"
              >
                <h2 className="h2 font-semibold text-brand mb-5">
                  0{index + 1}
                </h2>
                <div className="flex gap-1 items-center mb-4">
                  <item.icon size={24} />
                  <h4 className="h4 text-fg font-semibold ">{item.title}</h4>
                </div>
                <p className="text-default text-fg-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FastBooking;
