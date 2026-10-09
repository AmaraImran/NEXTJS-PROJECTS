export default function Spotlight() {
  return (
    <div className="mx-6 my-12 rounded-2xl overflow-hidden grid grid-cols-2 bg-[#363f39]">
      <div className="p-10 flex flex-col justify-center">
        <p className="text-[#F7F4EF]/70 text-sm mb-2">— Monthly Spotlight</p>
        <h3 className="text-[#F7F4EF] text-3xl font-bold mb-3">
          The Hidden Cove
        </h3>
        <p className="text-[#F7F4EF]/80 mb-5">
          A quiet stretch of coastline most travelers never find — ours.
        </p>
        <button className="bg-[#F7F4EF] text-[#6B5E51] px-5 py-2 rounded-full text-sm w-fit">
          Discover the Cove
        </button>
      </div>
      <div
        className="h-80 bg-cover bg-center"
        style={{ backgroundImage: "url(/images/hero4.jpg)" }}
      />
    </div>
  );
}