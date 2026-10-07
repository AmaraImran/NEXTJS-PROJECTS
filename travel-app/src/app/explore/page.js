import Navbar from "../components/Navbar";
import DestinationSlider from "../components/DestinationSlider";

const destinations = [
  { id: 1, title: "Mountain Trail", image: "/images/img1.jpg" },
  { id: 2, title: "Golden Field", image: "/images/img2.jpg" },
  { id: 3, title: "Coastal Cliff", image: "/images/img3.jpg" },
];

export default function ExplorePage() {
  return (
    <div className="bg-[#FAF8F4]">
      <div
        className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-6"
        style={{ backgroundImage: "url(/images/img8.jpg)" }}
      >
        <Navbar />
        <p className="text-white/80 text-sm tracking-widest uppercase mb-3">
          Find your calm
        </p>
        <h1 className="text-white text-5xl font-bold mb-4">Quiet Places to Wander</h1>
        <p className="text-white/90 max-w-md mb-6">
          Slow travel for people who'd rather sit still than rush through.
        </p>
        <div className="flex gap-3">
          <button className="bg-white text-[#4A6FA5] px-5 py-2 rounded-full text-sm">
            Sign in
          </button>
          <button className="bg-white/20 text-white border border-white px-5 py-2 rounded-full text-sm">
            ▶ Watch intro
          </button>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 pt-8 pb-2">
        <h2 className="text-xl font-semibold text-[#4A6FA5]">Destinations</h2>
        <a href="#" className="text-sm text-[#B37C8C]">browse all →</a>
      </div>
      <DestinationSlider destinations={destinations} />
    </div>
  );
}