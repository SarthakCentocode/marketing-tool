
import dbConnect from "@/lib/db";
import TemplateModuel from "@/lib/module/template";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const fetchdata:any[] = await TemplateModuel.find();
    const revArr = fetchdata.reverse()
    return NextResponse.json(revArr, {status:200})
  } catch (error) {
    console.log(error);
  }
}
