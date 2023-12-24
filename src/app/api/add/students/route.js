import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const addStudents = await prisma.User.createMany({
      data: reqBody,
    });

    return NextResponse.json({
      status: "success",
      data: addStudents,
    });
  } catch (e) {
    return NextResponse.json({
      status: "failed",
      data: e.toString(),
    });
  }
}
