import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model";


export async function POST(req : NextRequest) {
    try {
        console.log("Post route")
        await connectDB();
        const formData = await req.formData();
        let event ;
        try {
            event = Object.fromEntries(formData)
        } catch (error) {
            return NextResponse.json({message:"Invalid form data" , error: error instanceof Error ? error.message : 'Unknown error'} , {status : 400})
        }
        const createdEvent = await Event.create(event);
        return NextResponse.json({message : 'Event created successfully' , event : createdEvent} , {status : 201})
    } catch (error) {
        console.log("something went wrong")
        return NextResponse.json({message : 'Something went wrong' , error : error instanceof Error ? error.message : 'Unknown error'} , {status : 500})
    }
}