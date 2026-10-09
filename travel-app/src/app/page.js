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


const guides = [
  { id: 1, title: "Northern Lights, Solo", location: "Iceland", type: "Solo", image: "/images/hero1.jpg" },
  { id: 2, title: "Silent Forest Trail", location: "Finland", type: "Solo", image: "/images/hero2.jpg" },
];
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
