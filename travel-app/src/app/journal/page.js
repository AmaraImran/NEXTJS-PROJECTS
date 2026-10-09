import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import { posts } from "@/data/journal";
import Link from "next/link";
export default function JournalPage() {
  return (
    <div className="bg-[#F7F4EF] min-h-screen">
      <Navbar dark />
      <SectionHeader label="Journal" title="Slow Reads" subtitle="Notes on traveling quietly." />
      <div className="max-w-3xl mx-auto px-6 pb-16 grid gap-6">
       {posts.map((p) => (
  <Link key={p.id} href={`/journal/${p.id}`}>
    <div className="flex gap-5 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div
        className="w-48 h-40 shrink-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${p.image})` }}
      />
      <div className="py-4 pr-4">
        <p className="text-[#78909C] text-xs mb-1">{p.category} · {p.readTime}</p>
        <h3 className="text-[#6B5E51] font-semibold text-xl mb-1">{p.title}</h3>
        <p className="text-[#78909C]">{p.excerpt}</p>
      </div>
    </div>
  </Link>
))}
      </div>
      <Footer />
    </div>
  );
}