import FeaturesAirlines from "@/app/_components/FeaturesAirlines";
import Hero from "@/app/_components/Hero";
import WhyUs from "@/app/_components/WhyUs";
import PopularDestinations from "@/app/_components/PopularDestinations";
import FastBooking from "@/app/_components/FastBooking";
import FrequentQuestions from "@/app/_components/FrequentQuestions";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs />
      <FeaturesAirlines />
      <PopularDestinations />
      <FastBooking />
      <FrequentQuestions />
    </>
  );
}
