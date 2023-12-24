import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function POST(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const addStudent = await prisma.User.create({
      data: reqBody,
    });

    return NextResponse.json({
      status: "success",
      data: addStudent,
    });
  } catch (e) {
    return NextResponse.json({
      status: "failed",
      data: e.toString(),
    });
  }
}
