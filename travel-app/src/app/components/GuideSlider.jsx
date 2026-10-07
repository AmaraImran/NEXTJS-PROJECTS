import GuideCard from "./GuideCard";

export default function GuideSlider({ guides }) {
  return (
    <div className="flex gap-4 overflow-x-auto pb-4 px-6">
      {guides.map((guide) => (
        <GuideCard key={guide.id} guide={guide} />
      ))}
    </div>
  );
}
