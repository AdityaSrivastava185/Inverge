import connectDB from "@/lib/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Event from "@/database/event.model";
import {v2 as cloudinary} from "cloudinary"



export async function POST(req : NextRequest) {
    try {
        // console.log("Post route")
        await connectDB();
        const formData = await req.formData();
        // console.log(formData.get("title"))
        // console.log(formData)
        let event ;
        try {
            event = Object.fromEntries(formData)
        } catch (error) {
            return NextResponse.json({message:"Invalid form data" , error: error instanceof Error ? error.message : 'Unknown error'} , {status : 400})
        }
        const file = await formData.get('image') as File;
        if(!file){
            return NextResponse.json({message : 'Image file is required ' , error : 'No image file found in the form data '} , {status : 400})
        }

        const buffer = await Buffer.from(await file.arrayBuffer());
        const uploadResult = await new Promise((resolve , reject) => {
            cloudinary.uploader.upload_stream({resource_type : 'image' , folder : 'events'} , (error , result) => {
                if(error){
                    reject(error);
                }else{
                    resolve(result);
                }
            }).end(buffer);
        });
        event.image = (uploadResult as {secure_url : string}).secure_url;

        const createdEvent = await Event.create(event);
        return NextResponse.json({message : 'Event created successfully' , event : createdEvent} , {status : 201})
    } catch (error) {
        console.log("something went wrong")
        return NextResponse.json({message : 'Something went wrong' , error : error instanceof Error ? error.message : 'Unknown error'} , {status : 500})
    }
}

export async function GET() {
    try {
        connectDB()
        const events = await Event.find().sort({createdAt : -1});
        return NextResponse.json({message:"Events fetched successfully", events} , {status : 200})
    } catch (error) {
        return NextResponse.json({message : 'Something went wrong' , error : error instanceof Error ? error.message : 'Unknown error'} , {status : 500})
    }
}

// this is a route that accepts a slug as input -> returns the event detauls 