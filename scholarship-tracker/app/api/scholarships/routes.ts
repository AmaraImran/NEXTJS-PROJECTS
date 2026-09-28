import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();

  const scholarship = await prisma.scholarship.create({
    data: {
      name: data.name,
      status: data.status,
      deadline: data.deadline ? new Date(data.deadline) : null,
      link: data.link || null,
      description: data.description || null,
    },
  });

  return NextResponse.json(scholarship);
}