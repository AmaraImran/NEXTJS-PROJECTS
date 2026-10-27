export default function Hero() {
  return (
    <div
      className="relative flex min-h-[36rem] min-h-[100svh] flex-col items-center justify-center bg-cover bg-center px-4 py-28 text-center sm:px-6"
      style={{ backgroundImage: "url(/images/hero2.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-[1]">
        <p className="mb-3 text-sm uppercase tracking-widest text-[#F7F4EF]/80">
          Slow down
        </p>
        <h1 className="mx-auto mb-4 max-w-4xl text-4xl font-bold leading-tight text-[#F7F4EF] sm:text-5xl lg:text-6xl">
          Quiet Places to Wander
        </h1>
        <p className="mx-auto mb-6 max-w-md text-sm leading-relaxed text-[#F7F4EF]/90 sm:text-base">
          Cozy cabins, misty coastlines, and cafes made for sitting alone with
          your thoughts.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button className="rounded-full bg-[#78909C] px-5 py-2.5 text-sm text-[#F7F4EF]">
            Explore Places
          </button>
          <button className="rounded-full border border-[#F7F4EF] bg-transparent px-5 py-2.5 text-sm text-[#F7F4EF]">
            ▶ Watch intro
          </button>
        </div>
      </div>
    </div>
  );
}
