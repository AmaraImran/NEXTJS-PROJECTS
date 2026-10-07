import DestinationCard from "./DestinationCard";

export default function DestinationSlider({ destinations }) {
  return (
    <div
      aria-label="Destination cards"
      className="w-full overflow-x-auto overscroll-x-contain pb-4"
    >
      <div className="flex w-max min-w-full justify-center gap-4 px-1">
        {destinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </div>
  );
}