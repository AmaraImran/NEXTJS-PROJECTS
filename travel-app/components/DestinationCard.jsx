import Link from "next/link";

export default function DestinationCard({ destination }) {
  return (
    <Link href={`/destinations/${destination.id}`} className="w-[min(85vw,360px)] shrink-0 snap-start">
      <div className="overflow-hidden rounded-2xl bg-[#F7F4EF] shadow-md transition-shadow hover:shadow-lg">
        <div
          className="h-52 bg-cover bg-center sm:h-64"
          style={{ backgroundImage: `url(${destination.image})` }}
        />

        <div className="p-4 sm:p-5">
          <p className="text-[#78909C] text-sm mb-1">{destination.tag}</p>
          <h3 className="text-lg font-semibold text-[#6B5E51] sm:text-xl">
            {destination.title}
          </h3>
        </div>
      </div>
    </Link>
  );
}