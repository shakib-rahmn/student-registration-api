import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function DELETE(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const deletedStudent = await prisma.User.delete({
      where: reqBody,
    });

    return NextResponse.json({
      status: "success",
      data: deletedStudent,
    });
  } catch (e) {
    return NextResponse.json({
      status: "failed",
      data: e.toString(),
    });
  }
}
