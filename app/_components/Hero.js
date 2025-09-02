import Image from "next/image";
import hero_bg from "@/public/hero_bg.jpg";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="relative  text-white py-24 px-4">
      <div className="mx-auto max-w-6xl h-full mt-27">
        <div className=" relative z-10  max-w-2xl text-center md:text-start ">
          <h1 className=" h1 mb-4 font-semibold">
            Your Next <br /> Adventure Starts Here
          </h1>
          <p className="text-default mb-8 max-w-2xl text-surface">
            Book flights to your dream destinations with SkyReserve. Trusted by
            thousands of travelers worldwide.
          </p>
          <Button direction={"/flights"} size="big">
            SEARCH FLIGHT
          </Button>
        </div>

        <div className="position absolute top-0 left-0 w-full h-full bg-black z-5 opacity-35"></div>
        <Image
          src={hero_bg}
          fill
          placeholder="blur"
          quality={80}
          className="object-cover object-center"
          alt="sky from window"
        />
      </div>
    </section>
  );
}
