export default function DestinationCard({ destination }) {
  return (
    <div className="w-[220px] shrink-0 rounded-xl overflow-hidden shadow-sm bg-white">
      <div
        className="h-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${destination.image})` }}
      />
      <div className="p-3">
        <h3 className="text-sm font-medium text-[#4A6FA5]">{destination.title}</h3>
      </div>
    </div>
  );
}