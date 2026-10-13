import Link from "next/link";
import Navbar from "@/components/Navbar";
import SectionHeader from "@/components/SectionHeader";
import Footer from "@/components/Footer";
import { posts } from "@/data/journal";

export default function NewsPage() {
  return (
    <div className="bg-[#F7F4EF] min-h-screen">
      <Navbar dark />
      <SectionHeader label="News" title="Notes from Tranquil" />
      <div className="max-w-3xl mx-auto px-6 pb-16 grid gap-6">
        {posts.map((post) => (
          <Link key={post.id} href={`/journal/${post.id}`}>
            <article className="flex gap-5 bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div
                className="w-48 h-40 shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.image})` }}
              />
              <div className="py-4 pr-4">
                <p className="text-[#78909C] text-xs mb-1">
                  {post.category} · {post.readTime}
                </p>
                <h2 className="text-[#6B5E51] font-semibold text-xl mb-1">
                  {post.title}
                </h2>
                <p className="text-[#78909C]">{post.excerpt}</p>
              </div>
            </article>
          </Link>
        ))}
      </div>
      <Footer />
    </div>
  );
}