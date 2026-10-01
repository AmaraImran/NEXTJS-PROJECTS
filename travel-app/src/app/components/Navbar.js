import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-8 bg-white/90 backdrop-blur-md rounded-full px-6 py-3 shadow-sm">
      <span className="font-semibold flex items-center gap-1">
        🧭 Wander
      </span>
      <Link href="/" className="text-sm text-gray-700 hover:text-black">Dashboard</Link>
      <Link href="/explore" className="text-sm text-gray-700 hover:text-black">Explore</Link>
      <Link href="/trips/new" className="text-sm text-gray-700 hover:text-black">Destinations</Link>
      <Link href="/booking" className="text-sm text-gray-700 hover:text-black">Booking</Link>
      <Link
        href="/login"
        className="bg-black text-white text-sm px-4 py-2 rounded-full hover:bg-gray-800"
      >
        Login
      </Link>
    </nav>
  );
}