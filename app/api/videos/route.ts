import { authOptions } from "@/lib/auth";
import { connectToDatabase } from "@/lib/db";
import Video, { IVideo } from "@/models/video";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";


export async function GET(){
    try {     
        await connectToDatabase()
        const videoData = await Video.find({}).sort({createdAt: -1}).lean()

        if (!videoData) {
            return NextResponse.json([],{status:200})
        }

        return NextResponse.json(videoData)
    } catch (error) {
        console.log("Error fetching videos:",error)
        return NextResponse.json(
            {error:"Failed to fetch videos"},
            {status:500}
        )
    }
}

export async function POST(request:NextRequest){
    try {
        const session = await getServerSession(authOptions)

        if (!session) {
            return NextResponse.json({error:"unthorized"},{status:401});
        }

        await connectToDatabase()

        const body:IVideo = await request.json()

        if (
            !body.title ||
            !body.description ||
            !body.videoUrl ||
            !body.thumbnailUrl
        ) {
            return NextResponse.json({error:"Missing require information"},{status:400})
        }

        const videoData ={
            ...body,
            controls:body.controls ?? true,
            transformation:{
                height:1920,
                width:1080,
                quality:body.transformation?.quality ?? 100,
            },
        }

        const videoCreate = await Video.create(videoData)

        return NextResponse.json(videoCreate)
    } catch (error) {
        console.error("Error creating video:", error);
    return NextResponse.json(
      { error: "Failed to create video" },
      { status: 500 }
    );
    }
}