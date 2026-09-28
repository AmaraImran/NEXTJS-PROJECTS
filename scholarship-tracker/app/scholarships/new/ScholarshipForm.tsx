"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ScholarshipForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [status, setStatus] = useState("RESEARCHING");
  const [deadline, setDeadline] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // stop the browser from reloading the page

    await fetch("/api/scholarships", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, status, deadline, link, description }),
    });

    router.push("/dashboard");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Scholarship name"
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="RESEARCHING">Researching</option>
        <option value="APPLIED">Applied</option>
        <option value="AWARDED">Awarded</option>
      </select>
      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />
      <input
        value={link}
        onChange={(e) => setLink(e.target.value)}
        placeholder="Scholarship link"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Scholarship description"
      />
      <button type="submit">Save</button>
    </form>
  );
}