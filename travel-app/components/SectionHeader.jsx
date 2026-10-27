export default function SectionHeader({ label, title }) {
  return (
    <div className="px-4 pb-6 pt-12 text-center sm:px-6 sm:pb-8 sm:pt-16">
      <p className="mb-2 text-sm uppercase tracking-widest text-[#78909C]">{label}</p>
      <h2 className="text-3xl font-bold text-[#6B5E51] sm:text-4xl">{title}</h2>
    </div>
  );
}