import GuideCard from "./GuideCard";

export default function GuideSlider({ guides }) {
  return (
    <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:px-6">
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}
