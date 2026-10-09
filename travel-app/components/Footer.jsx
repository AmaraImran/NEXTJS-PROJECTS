export default function Footer() {
  return (
    <footer className="bg-[#4A4038] text-[#F7F4EF]/80 px-6 py-10">
      <div className="flex flex-wrap justify-between gap-8">
        <div>
          <span className="text-[#F7F4EF] font-semibold text-xl">Tranquil</span>
          <p className="text-sm mt-2 max-w-xs">
            A quiet corner of the internet for travelers who'd rather wander alone.
          </p>
        </div>

        <div className="flex gap-16 text-sm">
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

      <div className="border-t border-[#F7F4EF]/10 mt-8 pt-5 flex justify-between text-xs opacity-60">
        <span>© 2026 Tranquil. All rights reserved.</span>
        <span>Made by Amara</span>
      </div>
    </footer>
  );
}