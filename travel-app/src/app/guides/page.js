import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import GuideSlider from "@/components/GuideSlider";
import Footer from "@/components/Footer";
import { guides } from "@/data/guides";

export default function GuidesPage() {
  return (
    <div className="bg-[#F7F4EF] min-h-screen">
      <Navbar dark />
      <SectionHeader label="Guides" title="Quiet Ways to Wander" />
      <GuideSlider guides={guides} />
      <Footer />
    </div>
  );
}