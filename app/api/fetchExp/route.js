import { NextResponse } from "next/server";
import connectDB from "@/app/config/db";
import Expence from "@/models/Expence";

export async function POST(req) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { message: "Login again" },
        { status: 400 }
      );
    }

    await connectDB();

    const expenses = await Expence.find({ email }).sort({ createdAt: -1 });

    return NextResponse.json(
      { expenses },
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
