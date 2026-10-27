export default function Footer() {
  return (
    <footer className="bg-[#4A4038] px-4 py-8 text-[#F7F4EF]/80 sm:px-6 sm:py-10">
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:flex-wrap">
        <div>
          <span className="text-[#F7F4EF] font-semibold text-xl">Tranquil</span>
          <p className="text-sm mt-2 max-w-xs">
            A quiet corner of the internet for travelers who'd rather wander alone.
          </p>
        </div>

        <div className="flex gap-12 text-sm sm:gap-16">
          <div>
            <p className="text-[#F7F4EF] mb-2 font-medium">Explore</p>
            <p>Destinations</p>
            <p>Guides</p>
          </div>
          <div>
            <p className="text-[#F7F4EF] mb-2 font-medium">Info</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-[#F7F4EF]/10 pt-5 text-xs opacity-60 sm:flex-row sm:justify-between">
        <span>© 2026 Tranquil. All rights reserved.</span>
        <span>Made by Amara</span>
      </div>
    </footer>
  );
}