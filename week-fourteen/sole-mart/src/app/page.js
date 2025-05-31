import FilterSection from "@/components/FilterSection";
import Hero from "@/components/Hero";
import Productsdisplay from "@/components/ProductsDisplay";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero/>
      <FilterSection/>
      <Productsdisplay/>
    </div>
  );
}
