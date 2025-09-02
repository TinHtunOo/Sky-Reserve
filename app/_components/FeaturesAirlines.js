import Image from "next/image";
import singapore from "@/public/singapore.svg";
import qatar from "@/public/qatar.svg";
import emirates from "@/public/emirates.svg";
import airasia from "@/public/airasia.svg";

const airlines = [
  { name: "Singapore Airlines", logo: singapore },
  { name: "Qatar Airways", logo: qatar },
  { name: "Emirates", logo: emirates },
  { name: "AirAsia", logo: airasia },
];

function FeaturesAirlines() {
  return (
    <section className="py-10 px-4  ">
      <div className=" text-center md:text-start mx-auto max-w-6xl">
        <h2 className="h2 text-fg mb-3 ">Partner Airlines</h2>
        <p className="text-default text-fg-faint md:mx-0 max-w-xl mx-auto">
          We partner with top international and regional airlines to bring you
          the best travel deals.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-25 items-center justify-center  ">
          {airlines.map((airline) => (
            <div
              className="justify-center flex items-center"
              key={airline.name}
            >
              <Image
                src={airline.logo}
                width={200}
                quality={100}
                alt={airline.name}
                className=" opacity-80 hover:opacity-100 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesAirlines;
