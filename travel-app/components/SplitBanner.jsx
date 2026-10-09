export default function SplitBanner() {
  return (
    <div className="grid grid-cols-2 gap-4 px-6 py-8">
      <div
        className="relative h-80 rounded-2xl overflow-hidden flex items-end p-8 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-[1]">
          <p className="text-[#F7F4EF]/80 text-sm mb-2">— Solo Stays</p>
          <h3 className="text-[#F7F4EF] text-2xl font-bold mb-3">
            Cozy Places to Stay Alone
          </h3>
          <button className="bg-[#F7F4EF] text-[#6B5E51] px-4 py-2 rounded-full text-sm">
            Explore Stays
          </button>
        </div>
      </div>

      <div
        className="relative h-80 rounded-2xl overflow-hidden flex items-end p-8 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-[1]">
          <p className="text-[#F7F4EF]/80 text-sm mb-2">— Silent Trails</p>
          <h3 className="text-[#F7F4EF] text-2xl font-bold mb-3">
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