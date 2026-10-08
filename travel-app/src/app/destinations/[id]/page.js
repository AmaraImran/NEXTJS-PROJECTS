import { notFound } from "next/navigation";
import Navbar from "@/src/app/components/Navbar";
import Footer from "@/arc/app/components/Footer";
import { destinations } from "@/data/destinations";

export default async function DestinationPage({ params }) {
  const { id } = await params;
  const destination = destinations.find((d) => String(d.id) === id);
  if (!destination) notFound();

  return (
    <div className="bg-[#F7F4EF]">
      <div
        className="relative h-[70vh] bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${destination.image})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <Navbar />
        <div className="relative z-[1] p-10">
          <p className="text-[#F7F4EF]/80 text-sm mb-2">{destination.tag}</p>
          <h1 className="text-[#F7F4EF] text-5xl font-bold">{destination.title}</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <p className="text-[#6B5E51] text-lg leading-relaxed">{destination.description}</p>
      </div>
      <Footer />
    </div>
  );
}