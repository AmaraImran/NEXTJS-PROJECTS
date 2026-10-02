import { connectDB } from "@/lib/mongodb";
import Destination from "@/models/Destination";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  await connectDB();
  const destinations = await Destination.find();
  return NextResponse.json(destinations);
}

export async function POST(request) {
  await connectDB();

  const contentType = request.headers.get("content-type") || "";
  let body;

  if (contentType.includes("application/json")) {
    body = await request.json();
  } else if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    body = Object.fromEntries(formData.entries());

    const imageFile = formData.get("image");

    if (imageFile instanceof File) {
      const uploadDir = path.join(process.cwd(), "public", "destination");
      await fs.mkdir(uploadDir, { recursive: true });

      const originalName = imageFile.name.replace(/\s+/g, "-");
      const safeName = `${Date.now()}-${originalName}`;
      const filePath = path.join(uploadDir, safeName);
      const buffer = Buffer.from(await imageFile.arrayBuffer());

      await fs.writeFile(filePath, buffer);
      body.image = `/destination/${safeName}`;
    }
  } else {
    const text = await request.text();

    try {
      body = JSON.parse(text);
    } catch {
      return NextResponse.json(
        { error: "Request body must be valid JSON or multipart/form-data." },
        { status: 400 }
      );
    }
  }

  const destination = await Destination.create(body);
  return NextResponse.json(destination, { status: 201 });
}