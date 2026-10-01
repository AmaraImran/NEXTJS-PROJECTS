import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center text-center overflow-hidden">
      <Image
        src="/images/img2.jpg"
        alt="Sunset over a lake with mountains and tulips"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 text-white px-4">
        <span className="inline-block bg-white/20 backdrop-blur-md text-sm px-4 py-1.5 rounded-full mb-6">
          ✈️ Plan trips in minutes
        </span>
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Travel with ease.</h1>
        <p className="text-lg text-white/90 mb-8">
          Plan smarter with trips that fit how you actually want to explore.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="/trips/new" className="bg-white text-black px-5 py-2.5 rounded-full font-medium hover:bg-gray-100">
            Get started →
          </a>
          <a href="/explore" className="text-white underline underline-offset-4">
            Explore destinations
          </a>
        </div>
      </div>

      <span className="absolute bottom-8 z-10 text-white/70 text-xs tracking-widest">SCROLL ↓</span>
    </section>
  );
}