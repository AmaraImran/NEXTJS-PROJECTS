export default function Gallery({ images }) {
  const [main, ...rest] = images;
  const small = rest.slice(0, 4);
  const extra = images.length - 5;

  return (
    <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[420px]">
      <div
        className="col-span-2 row-span-2 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${main})` }}
      />
      {small.map((img, i) => (
        <div
          key={i}
          className="relative rounded-2xl bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        >
          {i === 3 && extra > 0 && (
            <div className="absolute inset-0 rounded-2xl bg-[#6B5E51]/60 flex items-center justify-center text-[#F7F4EF] text-3xl font-semibold">
              +{extra}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}