export default function GuideCard({ guide }) {
  return (
    <div className="relative w-[min(85vw,380px)] shrink-0 snap-start overflow-hidden rounded-2xl shadow-md">
      <div
        className="h-64 bg-cover bg-center sm:h-72"
        style={{ backgroundImage: `url(${guide.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <button className="absolute top-4 right-4 bg-[#F7F4EF]/90 w-9 h-9 rounded-full flex items-center justify-center">
        ♡
      </button>
      <div className="absolute bottom-5 left-4 right-4 sm:left-5 sm:right-5">
        <h3 className="mb-1 text-lg font-semibold text-[#F7F4EF] sm:text-xl">{guide.title}</h3>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm text-[#F7F4EF]/80">
          <span>📍 {guide.location}</span>
          <span>👤 {guide.type}</span>
        </div>
      </div>
    </div>
  );
}