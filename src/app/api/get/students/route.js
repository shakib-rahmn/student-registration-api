import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET(req, res) {
  try {
    const prisma = new PrismaClient();
    const studentList = await prisma.User.findMany();

    return NextResponse.json({
      status: "success",
      data: studentList,
    });
  } catch (e) {
    return NextResponse.json({
      status: "failed",
      data: e.toString(),
    });
  }
}
