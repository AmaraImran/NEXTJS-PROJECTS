export default function Newsletter() {
  return (
    <div className="bg-[#363f39] px-4 py-12 text-center sm:px-6 sm:py-16">
      <h2 className="mb-3 text-2xl font-bold text-[#F7F4EF] sm:text-3xl">
        Stay in the Quiet
      </h2>
      <p className="text-[#F7F4EF]/70 mb-6 max-w-md mx-auto">
        Get new tranquil spots and guides in your inbox, every now and then — never spam.
      </p>
      <div className="mx-auto flex w-full max-w-md flex-col justify-center gap-2 rounded-lg bg-green-100 p-3 sm:flex-row">
        <input
          type="email"
          placeholder="Enter your email"
          aria-label="Email address"
          className="min-w-0 flex-1 rounded-full px-4 py-2 text-[#6B5E51] outline-none"
        />
        <button type="button" className="rounded-full bg-[#81C784] px-5 py-2 text-sm text-[#F7F4EF]">
          Subscribe
        </button>
      </div>
    </div>
  );
}