import { apiRequest } from "@/lib/api";

export default async function Destinations() {
  const destinations = await apiRequest("/api/destination");

  return (
    <main className="min-h-screen bg-[#FAF8F4] px-6 py-24">
      <h1 className="text-3xl font-semibold mb-6">Tranquil places</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {destinations.map((d) => (
          <div key={d._id} className="bg-white rounded-xl p-4 border border-[#E8E4DD]">
            <p className="font-medium">{d.name}</p>
            <p className="text-sm text-[#6B6558]">{d.vibe}</p>
           < img src={d.image} alt={d.name} className="mt-2 w-full h-48 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </main>
  );
}