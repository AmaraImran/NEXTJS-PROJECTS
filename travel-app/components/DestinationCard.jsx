import Link from "next/link";

export default function DestinationCard({ destination }) {
  return (
    <Link href={`/destinations/${destination.id}`} className="shrink-0">
      <div className="w-[360px] rounded-2xl overflow-hidden shadow-md bg-[#F7F4EF] hover:shadow-lg transition-shadow">
        <div
          className="h-64 bg-cover bg-center"
          style={{ backgroundImage: `url(${destination.image})` }}
        />

        <div className="p-5">
          <p className="text-[#78909C] text-sm mb-1">{destination.tag}</p>
          <h3 className="text-[#6B5E51] font-semibold text-xl">
            {destination.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}