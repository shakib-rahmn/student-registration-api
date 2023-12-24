import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const getStudent = await prisma.User.findFirst({ orderBy: { id: "asc" } });

    return NextResponse.json({
      status: "success",
      data: getStudent,
    });
  } catch (e) {
    return NextResponse.json({
      status: "failed",
      data: e.toString(),
    });
  }
}
