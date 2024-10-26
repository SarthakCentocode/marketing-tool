import dbConnect from "@/lib/db";
import { log } from "console";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import TemplateModuel from "@/lib/module/template";

export async function POST(req: Request) {
  const resData = await req.json();

  try {
    console.log(resData);
    await dbConnect();
    const post = await TemplateModuel.create(resData);
    console.log(post);

    return new NextResponse("saved");
  } catch (error) {
    console.log("Error in post", error);
  }
}
