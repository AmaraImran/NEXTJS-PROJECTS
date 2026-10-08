import Navbar from "@/src/app/components/Navbar";
import SectionHeader from "@/src/app/components/SectionHeader";
import Footer from "@/src/app/components/Footer";
import { posts } from "@/data/journal";

export default function JournalPage() {
  return (
    <div className="bg-[#F7F4EF] min-h-screen">
      <Navbar dark />
      <SectionHeader label="Journal" title="Slow Reads" subtitle="Notes on traveling quietly." />
      <div className="max-w-3xl mx-auto px-6 pb-16 grid gap-6">
        {posts.map((p) => (
          <div key={p.id} className="flex gap-5 bg-white rounded-2xl overflow-hidden shadow-sm">
            <div
              className="w-48 h-40 shrink-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${p.image})` }}
            />
            <div className="py-4 pr-4">
              <h3 className="text-[#6B5E51] font-semibold text-xl mb-1">{p.title}</h3>
              <p className="text-[#78909C]">{p.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}