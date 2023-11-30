"use server";
import ContactDB from "@/lib/contact";
import Contact from "@/model/mongodb";
import { NextRequest,NextResponse } from "next/server";
export async function POST(req: NextRequest) {
    const { name, email, Subject, Phone, Message } = await req.json();
  
    try {
      await ContactDB();
      await Contact.create({ name, email, Subject, Phone, Message });
      return NextResponse.json({
        msg: ["Message sent Successfully"],
        success: true,
      });
    } catch (error:any) {
      console.error(error);
      return NextResponse.json({
        msg: ["An error occurred while processing your request"],
        success: false,
        error:error.message
      });
    }
  }
  
