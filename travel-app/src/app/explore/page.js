import Navbar from "@/src/app/components/Navbar";
import SectionHeader from "@/src/app/components/SectionHeader";
import DestinationCard from "@/src/app/components/DestinationCard";
import Footer from "@/src/app/components/Footer";
import { destinations } from "@/data/destinations";

export default function ExplorePage() {
  return (
    <div className="bg-[#F7F4EF] min-h-screen">
      <Navbar dark />
      <SectionHeader label="Explore" title="All Tranquil Places" subtitle="Quiet corners, picked for people who recharge alone." />
      <div className="flex flex-wrap justify-center gap-6 px-6 pb-16">
        {destinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
      <Footer />
    </div>
  );
}