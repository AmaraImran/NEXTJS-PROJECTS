export default function SectionHeader({ label, title }) {
  return (
    <div className="px-6 pt-16 pb-8 text-center">
      <p className="text-[#78909C] text-sm mb-2 tracking-widest uppercase">{label}</p>
      <h2 className="text-4xl font-bold text-[#6B5E51]">{title}</h2>
    </div>
  );
}