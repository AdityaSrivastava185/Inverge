'use server'

import connectDB from "../mongodb"
import Event from "@/database/event.model"


export const getSimilarEventsBySlug = async (slug : string) => {
    try {
        await connectDB();
        await Event.findOne({ slug });
        
    } catch (error) {
        return [];
    }
}