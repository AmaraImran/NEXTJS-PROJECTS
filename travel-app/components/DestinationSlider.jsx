import DestinationCard from "./DestinationCard";
export default function DestinationSlider({ destinations }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 px-6">
      {destinations.map((d) => (
        <DestinationCard key={d.id} destination={d} />
      ))}
    </div>
  );
}