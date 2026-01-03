import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.json({ user: null });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
     console.log(decoded);
    return NextResponse.json({ user: decoded ,email:decoded.email , name:decoded.name});
   
  } catch {
    return NextResponse.json({ user: null });
  }
}
