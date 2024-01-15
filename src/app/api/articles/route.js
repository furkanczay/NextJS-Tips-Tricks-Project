import dbConnect from "@/libs/database/dbConnect";
import Article from "@/models/Article";
import Comment from "@/models/Comment";
import User from "@/models/User";
import Category from "@/models/Category";
import { NextResponse } from "next/server";
export async function GET(request){
    await dbConnect();
    try{
        const articles = await Article.find({}).populate('author', 'firstName lastName email username profile_image -_id').populate('categories', 'name slug -_id').populate('comments_count');
        return NextResponse.json({success: true, data: articles});
    }catch(error){
        console.log(error);
        return NextResponse.json({success: false, message: error});
    }
}