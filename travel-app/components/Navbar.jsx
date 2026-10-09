import Link from "next/link";

export default function Navbar({ dark = false }) {
  const text = dark ? "text-[#6B5E51]" : "text-[#F7F4EF]";
  return (
    <nav className={`${dark ? "relative" : "absolute top-0 left-0 right-0"} z-10 flex items-center justify-between px-8 py-5`}>
      <Link href="/" className={`${text} font-semibold text-lg`}>Tranquil</Link>
      <div className={`flex gap-6 text-sm ${text}`}>
        <Link href="/">Home</Link>
        <Link href="/explore">Explore</Link>
        <Link href="/journal">Journal</Link>
      </div>
      <button className="bg-[#6B5E51] text-[#F7F4EF] px-4 py-2 rounded-full text-sm">
        Sign in
      </button>
    </nav>
  );
}