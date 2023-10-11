import connectMongoDB from "@/app/libs/mongodb";
import Topic from "@/app/models/topic";
import {NextResponse} from "next/server";

export async function POST(request) {
    const {title, description} = await request.json();
    await connectMongoDB()
    await Topic.create({title, description})
    return NextResponse.json({message: "Topic Created"}, {status: 201})
}