import dbConnect from "@/lib/db";
import TemplateModuel from "@/lib/module/template";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const fetchData: any[] = await TemplateModuel.find();
    console.log(fetchData);
    return NextResponse.json(fetchData, { status: 200 });
  } catch (error) {
    console.log(error);
  }
}
