import { prisma } from "@/lib/prisma";
import Link from "next/link";

const statusStyles: Record<string, string> = {
  RESEARCHING: "bg-[#FBE4E9] text-[#B24D63]",
  APPLYING: "bg-[#E4EFD9] text-[#5A7A47]",
  SUBMITTED: "bg-[#E4EFD9] text-[#5A7A47]",
  INTERVIEW: "bg-[#F3B4C0] text-[#7A2E3D]",
  ACCEPTED: "bg-[#8FAE7D] text-white",
  REJECTED: "bg-[#E8E4DD] text-[#6B6558]",
};

export default async function Home() {
  const scholarships = await prisma.scholarship.findMany({
    orderBy: { deadline: "asc" },
  });

  const total = scholarships.length;
  const inProgress = scholarships.filter((s) =>
    ["APPLYING", "SUBMITTED", "INTERVIEW"].includes(s.status)
  ).length;
  const nextDeadline = scholarships.find((s) => s.deadline)?.deadline;

  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#2E3328]">
      <div className="max-w-3xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <h1 className="text-2xl font-semibold">My Scholarships</h1>
          <Link
            href="/scholarships/new"
            className="bg-[#8FAE7D] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#7A9A69] transition-colors"
          >
            Add scholarship
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-[#E4EFD9] rounded-xl p-4">
            <p className="text-2xl font-semibold">{total}</p>
            <p className="text-sm text-[#5A7A47]">Total tracked</p>
          </div>
          <div className="bg-[#FBE4E9] rounded-xl p-4">
            <p className="text-2xl font-semibold">{inProgress}</p>
            <p className="text-sm text-[#B24D63]">In progress</p>
          </div>
          <div className="bg-white border border-[#E8E4DD] rounded-xl p-4">
            <p className="text-lg font-semibold">
              {nextDeadline
                ? new Date(nextDeadline).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                  })
                : "—"}
            </p>
            <p className="text-sm text-[#6B6558]">Next deadline</p>
          </div>
        </div>

        {/* List */}
        {scholarships.length === 0 ? (
          <div className="text-center py-16 text-[#6B6558]">
            <p>No scholarships yet.</p>
            <Link href="/scholarships/new" className="text-[#5A7A47] underline">
              Add your first one
            </Link>
          </div>
        ) : (
          <ul className="space-y-3">
            {scholarships.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/scholarships/${s.id}`}
                  className="flex items-center justify-between bg-white border border-[#E8E4DD] rounded-xl px-5 py-4 hover:border-[#8FAE7D] transition-colors"
                >
                  <div>
                    <p className="font-medium">{s.name}</p>
                    {s.deadline && (
                      <p className="text-sm text-[#6B6558]">
                        Due{" "}
                        {new Date(s.deadline).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </p>
                    )}
                  </div>
                  <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      statusStyles[s.status] ?? "bg-[#E8E4DD] text-[#6B6558]"
                    }`}
                  >
                    {s.status}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}