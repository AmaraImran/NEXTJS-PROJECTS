export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex flex-col items-center justify-center text-center px-6"
      style={{ backgroundImage: "url(/images/hero2.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-[1]">
        <p className="text-[#F7F4EF]/80 text-sm tracking-widest uppercase mb-3">
          Slow down
        </p>
        <h1 className="text-[#F7F4EF] text-5xl font-bold mb-4">
          Quiet Places to Wander
        </h1>
        <p className="text-[#F7F4EF]/90 max-w-md mx-auto mb-6">
          Cozy cabins, misty coastlines, and cafes made for sitting alone with your thoughts.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="bg-[#81C784] text-[#F7F4EF] px-5 py-2 rounded-full text-sm">
            Explore Places
          </button>
          <button className="bg-transparent text-[#F7F4EF] border border-[#F7F4EF] px-5 py-2 rounded-full text-sm">
            ▶ Watch intro
          </button>
        </div>
      </div>
    </div>
  );
}