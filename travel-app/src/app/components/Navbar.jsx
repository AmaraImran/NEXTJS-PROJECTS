export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-8 py-5">
      <span className="text-[#F7F4EF] font-semibold text-lg">Tranquil</span>
      <div className="flex gap-6 text-[#F7F4EF] text-sm">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">Journal</a>
      </div>
      <button className="bg-[#F7F4EF] text-[#6B5E51] px-4 py-2 rounded-full text-sm">
        Sign in
      </button>
    </nav>
  );
}