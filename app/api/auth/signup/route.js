import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import  connectDB  from "@/app/config/db.js";
import User from "@/models/User";

export async function POST(req) {
  try {
    const {name, email, password } = await req.json();
    console.log(name,email,password);


    // 1. Validation
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // 2. Connect DB
    await connectDB();

    // 3. Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email already exists" },
        { status: 409 }
      );
    }

    // 4. Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // 5. Create user
    await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // 6. Response
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
