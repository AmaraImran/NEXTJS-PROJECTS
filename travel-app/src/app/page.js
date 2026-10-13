import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import DestinationSlider from "@/components/DestinationSlider";
import SplitBanner from "../../components/SplitBanner";
import GuideSlider from "../../components/GuideSlider";
import Spotlight from "../../components/Spotlight";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import {destinations} from "@/data/destinations";
import { guides } from "@/data/guides";
export default function Home() {
  return (
    <div className="bg-[#F7F4EF]">
      <Navbar />
      <Hero />
      <SectionHeader label="Country of Calm" title="Tranquil Destinations" />
      <DestinationSlider destinations={destinations} />
      <SplitBanner />
      <GuideSlider guides={guides} />
      <Spotlight/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}
