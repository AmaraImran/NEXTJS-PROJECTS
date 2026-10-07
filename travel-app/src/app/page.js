import Navbar from "@/src/app/components/Navbar";
import Hero from "@/src/app/components//Hero";
import SectionHeader from "@/src/app/components/SectionHeader";
import DestinationSlider from "@/src/app/components/DestinationSlider";
import SplitBanner from "./components/SplitBanner";
import GuideSlider from "./components/GuideSlider";
import Spotlight from "./components/Spotlight";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
const destinations = [
  { id: 1, title: "Misty Cove", tag: "Coastal", image: "/images/hero1.jpg" },
  { id: 2, title: "Pine Cabin", tag: "Forest", image: "/images/hero2.jpg" },
  { id: 3, title: "Quiet Harbor", tag: "Coastal", image: "/images/hero3.jpg" },
  {
    id: 4,
    title: "Mountain Retreat",
    tag: "Mountain",
    image: "/images/hero4.jpg",
  },
  { id: 5, title: "Quiet Harbor", tag: "Coastarl", image: "/images/hero3.jpg" },
];
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
