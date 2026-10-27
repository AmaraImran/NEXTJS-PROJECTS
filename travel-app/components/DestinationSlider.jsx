import DestinationCard from "./DestinationCard";
export default function DestinationSlider({ destinations }) {
  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6">
      {destinations.map((d) => (
        <DestinationCard key={d.id} destination={d} />
      ))}
    </div>
  );
}