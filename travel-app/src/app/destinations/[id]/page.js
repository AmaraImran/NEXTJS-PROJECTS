import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import BookingCard from "@/components/BookingCard";
import SectionHeader from "@/components/SectionHeader";
import DestinationSlider from "@/components/DestinationSlider";
import { destinations } from "@/data/destinations";

export default async function DestinationPage({ params }) {
  const { id } = await params;
  const d = destinations.find((x) => String(x.id) === id);
  if (!d) notFound();

  const images = d.gallery ?? [d.image];
  const features = d.features ?? [];
  const others = destinations.filter((x) => x.id !== d.id);

  return (
    <div className="bg-[#F7F4EF]">
      <Navbar dark />

      <div className="max-w-6xl mx-auto px-6">
        {/* breadcrumb */}
        <p className="text-sm text-[#78909C] mb-4">
          <Link href="/explore" className="text-[#6B5E51]">Destinations</Link> › {d.title}
        </p>

        {/* title row */}
        <h1 className="text-4xl font-bold text-[#6B5E51]">{d.title}, {d.location}</h1>
        <div className="flex gap-5 text-sm text-[#78909C] mt-2 mb-6">
          <span>{d.type}</span>
          <span>📍 {d.location}</span>
          <span>★ {d.rating} ({d.reviewCount} reviews)</span>
        </div>

        <Gallery images={images} />

        {/* section tabs */}
     

        <div className="grid lg:grid-cols-[1fr_340px] gap-10">
          <div>
            <section id="overview" className="mb-10 mt-10">
              <h2 className="text-2xl font-bold text-[#6B5E51] mb-3">About this place</h2>
              <p className="text-[#6B5E51]/80 leading-relaxed">{d.description}</p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-[#6B5E51] mb-4">Quiet details</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  ["Best season", d.bestSeason],
                  ["Crowds", d.crowdLevel],
                  ["Noise", d.noiseLevel],
                  ["Guests", `Up to ${d.guests}`],
                ].map(([label, value]) => (
                  <div key={label} className="bg-white rounded-xl p-4 shadow-sm">
                    <p className="text-xs text-[#78909C]">{label}</p>
                    <p className="text-[#6B5E51] font-semibold">{value}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="features" className="mb-10">
              <h2 className="text-2xl font-bold text-[#6B5E51] mb-4">Features</h2>
              <div className="flex flex-wrap gap-3">
                {features.map((f) => (
                  <span key={f} className="bg-white border border-[#78909C]/30 text-[#6B5E51] text-sm px-4 py-2 rounded-full">
                    {f}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <aside>
            <BookingCard price={d.price} />
          </aside>
        </div>
      </div>

      <div id="recommended">
        <SectionHeader label="Keep exploring" title="More Quiet Places" />
        <DestinationSlider destinations={others} />
      </div>

      <Footer />
    </div>
  );
}