export default function SplitBanner() {
  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-6 sm:px-6 sm:py-8 md:grid-cols-2">
      <div
        className="relative flex min-h-72 items-end overflow-hidden rounded-2xl bg-cover bg-center p-5 sm:h-80 sm:p-8"
        style={{ backgroundImage: "url(/images/hero1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-[1]">
          <p className="text-[#F7F4EF]/80 text-sm mb-2">— Solo Stays</p>
          <h3 className="mb-3 text-xl font-bold text-[#F7F4EF] sm:text-2xl">
            Cozy Places to Stay Alone
          </h3>
          <button className="bg-[#F7F4EF] text-[#6B5E51] px-4 py-2 rounded-full text-sm">
            Explore Stays
          </button>
        </div>
      </div>

      <div
        className="relative flex min-h-72 items-end overflow-hidden rounded-2xl bg-cover bg-center p-5 sm:h-80 sm:p-8"
        style={{ backgroundImage: "url(/images/hero2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-[1]">
          <p className="text-[#F7F4EF]/80 text-sm mb-2">— Silent Trails</p>
          <h3 className="mb-3 text-xl font-bold text-[#F7F4EF] sm:text-2xl">
            Walk Where It's Quiet
          </h3>
          <button className="bg-[#F7F4EF] text-[#6B5E51] px-4 py-2 rounded-full text-sm">
            Explore Trails
          </button>
        </div>
      </div>
    </div>
  );
}