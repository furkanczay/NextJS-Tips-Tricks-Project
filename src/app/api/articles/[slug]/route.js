import dbConnect from "@/libs/database/dbConnect";
import Article from "@/models/Article";
import Comment from "@/models/Comment";
import Category from "@/models/Category";
import { NextResponse } from "next/server";

export async function GET(request, { params }){
      const { slug } = params;
      try{
            await dbConnect();
            const article = await Article.findOne({slug}).populate('author', 'username email firstName lastName profile_image').populate({
                  path: 'comments',
                  populate: {
                        path: 'user'
                  }
            }).populate('categories', 'name slug');
            if(!article){
                  return NextResponse.json({ success: false }, { status: 400 })
            }
            return NextResponse.json({success: true, data: article}, {status: 200});
      }catch(error){
            return NextResponse.error({success: false, message: error}, {status: 500});
      }
}