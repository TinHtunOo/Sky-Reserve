import tokyo from "@/public/tokyo.jpg";
import paris from "@/public/paris.jpg";
import bangkok from "@/public/bangkok.jpg";
import newyork from "@/public/newyork.jpg";
import Image from "next/image";

const destinations = [
  {
    city: "Tokyo",
    country: "Japan",
    price: "$199",
    image: tokyo,
  },
  {
    city: "Paris",
    country: "France",
    price: "$259",
    image: paris,
  },
  {
    city: "Bangkok",
    country: "Thailand",
    price: "$99",
    image: bangkok,
  },
  {
    city: "New York",
    country: "USA",
    price: "$299",
    image: newyork,
  },
];

function PopularDestinations() {
  return (
    <section className="py-15 px-4 bg-surface">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-start  mb-10">
          <h2 className="h2 text-fg mb-3">Popular Destinations</h2>
          <p className="text-default text-fg-faint md:mx-0 max-w-xl mx-auto">
            Discover our most booked routes and start your journey today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.city}
              className="rounded-2xl overflow-hidden border bg-bg border-stroke-faint hover:shadow-md transition"
            >
              <Image
                src={dest.image}
                alt={dest.city}
                quality={100}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="h4 text-fg mb-2 font-semibold">
                  {dest.city}, {dest.country}
                </h3>
                <p className="text-small text-fg-muted">
                  From{" "}
                  <span className="text-brand h3 font-semibold ">
                    {dest.price}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PopularDestinations;
