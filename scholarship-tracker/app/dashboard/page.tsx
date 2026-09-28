export default function Home() {
  const scholarships = [
    { id: "1", name: "MEXT", status: "Applying", deadline: "2026-11-01" },
    { id: "2", name: "Open Doors", status: "Applying", deadline: "2026-10-15" },
  ];

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">My Scholarships</h1>
      <ul className="space-y-2">
        {scholarships.map((s) => (
          <li key={s.id} className="border p-3 rounded">
            <p className="font-semibold">{s.name}</p>
            <p className="text-sm text-gray-500">{s.status} — due {s.deadline}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}