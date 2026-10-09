export default function BookingCard({ price }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#6B5E51]/10 p-6 sticky top-6 mt-10">
      <p className="text-[#6B5E51] text-3xl font-bold">
        ${price} <span className="text-sm font-normal text-[#78909C]">per night</span>
      </p>

      <div className="grid grid-cols-2 gap-3 mt-5">
        <label className="text-sm text-[#78909C]">
          Check-in
          <input type="date" className="mt-1 w-full border border-[#6B5E51]/20 rounded-lg px-3 py-2 text-[#6B5E51]" />
        </label>
        <label className="text-sm text-[#78909C]">
          Check-out
          <input type="date" className="mt-1 w-full border border-[#6B5E51]/20 rounded-lg px-3 py-2 text-[#6B5E51]" />
        </label>
      </div>

      <label className="block text-sm text-[#78909C] mt-3">
        Guests
        <select className="mt-1 w-full border border-[#6B5E51]/20 rounded-lg px-3 py-2 text-[#6B5E51]">
          <option>1 Guest</option>
          <option>2 Guests</option>
          <option>3 Guests</option>
        </select>
      </label>

      <button className="w-full mt-5 bg-[#81C784] text-[#F7F4EF] py-3 rounded-full font-medium">
        Reserve Now
      </button>

      <div className="mt-5 pt-4 border-t border-[#6B5E51]/10 text-sm text-[#6B5E51] space-y-2">
        <div className="flex justify-between"><span className="text-[#78909C]">${price} × 5 nights</span><span>${price * 5}</span></div>
        <div className="flex justify-between"><span className="text-[#78909C]">Service fee</span><span>$0</span></div>
        <div className="flex justify-between font-semibold"><span>Total</span><span>${price * 5}</span></div>
      </div>
    </div>
  );
}