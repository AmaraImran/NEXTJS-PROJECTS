import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";

const statusStyles: Record<string, string> = {
  RESEARCHING: "bg-[#FBE4E9] text-[#B24D63]",
  APPLYING: "bg-[#E4EFD9] text-[#5A7A47]",
  SUBMITTED: "bg-[#E4EFD9] text-[#5A7A47]",
  INTERVIEW: "bg-[#F3B4C0] text-[#7A2E3D]",
  ACCEPTED: "bg-[#8FAE7D] text-white",
  REJECTED: "bg-[#E8E4DD] text-[#6B6558]",
};

async function toggleTask(formData: FormData) {
  "use server";
  const taskId = formData.get("taskId") as string;
  const done = formData.get("done") === "true";
  await prisma.task.update({
    where: { id: taskId },
    data: { done: !done },
  });
}

async function addTask(formData: FormData) {
  "use server";
  const title = formData.get("title") as string;
  const scholarshipId = formData.get("scholarshipId") as string;
  if (!title) return;
  await prisma.task.create({
    data: { title, scholarshipId },
  });
}

export default async function ScholarshipDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const scholarship = await prisma.scholarship.findUnique({
    where: { id },
    include: { tasks: true },
  });

  if (!scholarship) notFound();

  const doneCount = scholarship.tasks.filter((t) => t.done).length;

  return (
    <main className="min-h-screen bg-[#FAF8F4] text-[#2E3328]">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link href="/" className="text-sm text-[#6B6558] hover:text-[#2E3328]">
          ← Back
        </Link>

        {/* Header */}
        <div className="flex items-start justify-between mt-4 mb-6">
          <div>
            <h1 className="text-2xl font-semibold">{scholarship.name}</h1>
            {scholarship.country && (
              <p className="text-sm text-[#6B6558]">{scholarship.country}</p>
            )}
          </div>
          <span
            className={`text-xs font-medium px-3 py-1 rounded-full ${
              statusStyles[scholarship.status] ?? "bg-[#E8E4DD] text-[#6B6558]"
            }`}
          >
            {scholarship.status}
          </span>
        </div>

        {/* Key facts */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-white border border-[#E8E4DD] rounded-xl p-4">
            <p className="text-xs text-[#6B6558] mb-1">Deadline</p>
            <p className="font-medium">
              {scholarship.deadline
                ? new Date(scholarship.deadline).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })
                : "Not set"}
            </p>
          </div>
          <div className="bg-white border border-[#E8E4DD] rounded-xl p-4">
            <p className="text-xs text-[#6B6558] mb-1">Funding</p>
            <p className="font-medium">{scholarship.funding ?? "Not set"}</p>
          </div>
        </div>

        {/* Description */}
        {scholarship.description && (
          <div className="mb-8">
            <h2 className="text-sm font-medium text-[#6B6558] mb-2">Description</h2>
            <p className="text-[#2E3328]">{scholarship.description}</p>
          </div>
        )}

        {/* Link */}
        {scholarship.link && (
          <div className="mb-8">
            <a
              href={scholarship.link}
              target="_blank"
              className="text-[#5A7A47] underline text-sm"
            >
              Official scholarship page ↗
            </a>
          </div>
        )}

        {/* Notes */}
        {scholarship.notes && (
          <div className="mb-8">
            <h2 className="text-sm font-medium text-[#6B6558] mb-2">Notes</h2>
            <p className="text-[#2E3328] whitespace-pre-wrap">{scholarship.notes}</p>
          </div>
        )}

        {/* Checklist / documents required */}
        <div className="bg-[#E4EFD9] rounded-xl p-5 mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-medium">Checklist</h2>
            <span className="text-sm text-[#5A7A47]">
              {doneCount}/{scholarship.tasks.length} done
            </span>
          </div>

          <ul className="space-y-2 mb-4">
            {scholarship.tasks.map((task) => (
              <li key={task.id} className="flex items-center gap-3">
                <form action={toggleTask}>
                  <input type="hidden" name="taskId" value={task.id} />
                  <input type="hidden" name="done" value={String(task.done)} />
                  <button
                    type="submit"
                    className={`w-5 h-5 rounded border flex items-center justify-center text-xs ${
                      task.done
                        ? "bg-[#8FAE7D] border-[#8FAE7D] text-white"
                        : "bg-white border-[#B9C9AE]"
                    }`}
                  >
                    {task.done && "✓"}
                  </button>
                </form>
                <span className={task.done ? "line-through text-[#6B6558]" : ""}>
                  {task.title}
                </span>
              </li>
            ))}
          </ul>

          <form action={addTask} className="flex gap-2">
            <input type="hidden" name="scholarshipId" value={scholarship.id} />
            <input
              name="title"
              placeholder="e.g. Upload transcript"
              className="flex-1 border border-[#B9C9AE] rounded-lg px-3 py-2 text-sm bg-white"
            />
            <button
              type="submit"
              className="bg-[#8FAE7D] text-white px-3 py-2 rounded-lg text-sm"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}