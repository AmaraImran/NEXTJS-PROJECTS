export default function Spotlight() {
  return (
    <div className="mx-4 my-8 grid grid-cols-1 overflow-hidden rounded-2xl bg-[#363f39] sm:mx-6 sm:my-12 md:grid-cols-2">
      <div className="flex flex-col justify-center p-6 sm:p-10">
        <p className="text-[#F7F4EF]/70 text-sm mb-2">— Monthly Spotlight</p>
        <h3 className="mb-3 text-2xl font-bold text-[#F7F4EF] sm:text-3xl">
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
        className="h-56 bg-cover bg-center sm:h-72 md:h-80"
        style={{ backgroundImage: "url(/images/hero4.jpg)" }}
      />
    </div>
  );
}