import { NextResponse } from "next/server";
import  connectDB  from "@/app/config/db.js";
import Expence from "@/models/Expence.js";

export async function POST(req) {
    try {
        const {name,amount,desc, email} =await req.json()
        console.log(name,amount , desc, email)

        if (!name || amount === undefined || !desc)
 {
              return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
              );
            }
        await connectDB();
        await Expence.create({
              name,
              amount,
              description: desc,
              date: new Date(),
              email
            });
         return NextResponse.json(
              { message: "Expense created successfully" },
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