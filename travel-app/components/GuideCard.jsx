export default function GuideCard({ guide }) {
  return (
    <div className="w-[380px] shrink-0 rounded-2xl overflow-hidden shadow-md relative">
      <div
        className="h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${guide.image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <button className="absolute top-4 right-4 bg-[#F7F4EF]/90 w-9 h-9 rounded-full flex items-center justify-center">
        ♡
      </button>
      <div className="absolute bottom-5 left-5 right-5">
        <h3 className="text-[#F7F4EF] font-semibold text-xl mb-1">{guide.title}</h3>
        <div className="flex gap-3 text-[#F7F4EF]/80 text-sm">
          <span>📍 {guide.location}</span>
          <span>👤 {guide.type}</span>
        </div>
      </div>
    </div>
  );
}