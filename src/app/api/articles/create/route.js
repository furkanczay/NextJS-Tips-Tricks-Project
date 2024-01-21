import { NextResponse } from "next/server";
import Article from "@/models/Article";
import dbConnect from "@/libs/database/dbConnect";
import { getToken } from "next-auth/jwt";
import { getJwtSecretKey } from "@/helpers/jwtHelper";

export async function POST(request) {
    const token = await getToken({req: request, secret:getJwtSecretKey()})
    console.log(token);
    if(!token) return NextResponse.json({success:false}, { status: 400 });
    const {title, content, categories} = await request.json();
    try{
        await dbConnect();
        const author = token.id
        const articleExist = await Article.findOne({title});
        if(articleExist){
            return NextResponse.json({ success: false, message: 'Böyle bir yazı daha önce paylaşılmış!' }, { status:400 })
        } 
        const article = await Article.create({
            title,
            content,
            categories,
            author,
        });
        return NextResponse.json({ success: true, data: article })
    }catch(error){
        console.log(error);
        return NextResponse.json({ success: false, message: error })
    }
}