import { DollarSign, Headset, Plane, Users } from "lucide-react";

const features = [
  {
    title: "Best Price Guarantee",
    desc: "We compare fares from hundreds of airlines to get you the best deals — always.",
    icon: DollarSign,
  },
  {
    title: "Customer Support",
    desc: "Need help with your booking? Our team is here for you day and night.",
    icon: Headset,
  },
  {
    title: "Fast & Easy Booking",
    desc: "Book your flights in just a few clicks with our intuitive platform.",
    icon: Plane,
  },
  {
    title: "Trusted by Travelers",
    desc: "Thousands of happy customers fly with SKY|RESERVE every month.",
    icon: Users,
  },
];

function WhyUs() {
  return (
    <section className="py-15 px-4 bg-surface  ">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-start mb-15">
          <h2 className="h2 text-fg mb-3 ">Why Choose SKY|RESERVE?</h2>
          <p className="text-default text-fg-faint max-w-xl md:mx-0 mx-auto">
            We make your flight booking experience faster, easier, and more
            affordable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => {
            return (
              <div
                key={feature.title}
                className="relative rounded-2xl p-6 border bg-bg border-stroke-faint hover:shadow-lg duration-200 ease-in transition"
              >
                <div className="absolute rounded-full bg-fg w-9 h-9 flex items-center justify-center top-[-12px] left-[-10px]">
                  <feature.icon className=" text-white w-5 h-5 " />
                </div>

                <h4 className="h4 text-fg font-semibold mb-2">
                  {feature.title}
                </h4>
                <p className="text-default text-fg-muted">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
