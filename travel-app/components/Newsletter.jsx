export default function Newsletter() {
  return (
    <div className="bg-[#363f39] text-center px-6 py-16">
      <h2 className="text-[#F7F4EF] text-3xl font-bold mb-3">
        Stay in the Quiet
      </h2>
      <p className="text-[#F7F4EF]/70 mb-6 max-w-md mx-auto">
        Get new tranquil spots and guides in your inbox, every now and then — never spam.
      </p>
      <div className="flex justify-center gap-2 max-w-md mx-auto bg-green-100 p-3 rounded-lg">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-full text-[#6B5E51] outline-none"
        />
        <button className="bg-[#81C784] text-[#F7F4EF] px-5 py-2 rounded-full text-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
}