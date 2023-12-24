import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function PATCH(req, res) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
    const updatedStudent = await prisma.User.update({
      where: {id: reqBody['id']},
      data: reqBody
    });

    return NextResponse.json({
      status: "success",
      data: updatedStudent,
    });
  } catch (e) {
    return NextResponse.json({
      status: "failed",
      data: e.toString(),
    });
  }
}
