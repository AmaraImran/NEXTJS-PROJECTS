import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { posts } from "@/data/journal";

export default async function JournalPostPage({ params }) {
  const { id } = await params;
  const post = posts.find((p) => String(p.id) === id);
  if (!post) notFound();

  const more = posts.filter((p) => p.id !== post.id);

  return (
    <div className="bg-[#F7F4EF]">
      <Navbar dark />

      <article className="max-w-2xl mx-auto px-6 pb-16">
        <p className="text-sm text-[#78909C] mb-4">
          <Link href="/journal" className="text-[#6B5E51]">Journal</Link> › {post.category}
        </p>

        <h1 className="text-4xl font-bold text-[#6B5E51] mb-3">{post.title}</h1>
        <p className="text-sm text-[#78909C] mb-8">
          By {post.author} · {post.date} · {post.readTime}
        </p>

        <div
          className="h-80 rounded-2xl bg-cover bg-center mb-10"
          style={{ backgroundImage: `url(${post.image})` }}
        />

        <div className="space-y-5">
          {post.content.map((para, i) => (
            <p key={i} className="text-[#6B5E51]/90 text-lg leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <Link href="/journal" className="inline-block mt-12 text-[#78909C]">
          ← Back to journal
        </Link>
      </article>

      {more.length > 0 && (
        <div className="max-w-2xl mx-auto px-6 pb-16">
          <h2 className="text-2xl font-bold text-[#6B5E51] mb-4">Keep reading</h2>
          <div className="grid gap-4">
            {more.map((p) => (
              <Link key={p.id} href={`/journal/${p.id}`} className="text-[#6B5E51] underline">
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}