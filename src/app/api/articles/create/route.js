import { NextResponse } from "next/server";
import Article from "@/models/Article";
import dbConnect from "@/libs/database/dbConnect";
import { getServerSession } from "next-auth";
import { getToken } from "next-auth/jwt";
import { getJwtSecretKey } from "@/helpers/jwtHelper";

export async function POST(request) {
    const token = await getToken({req: request, secret: getJwtSecretKey()});
    if(!token || !token.role || token.role !== 'admin'){
        return NextResponse.json({
            success: false,
            message: 'Yetkisiz kullanıcı!'
        }, {status: 401});
    }
    const {title, content, categories, author} = await request.json();
    try{
        await dbConnect();
        const articleExist = await Article.findOne({title});
        if(articleExist){
            return NextResponse.json({ success: false, message: 'Böyle bir yazı daha önce paylaşılmış!' })
        } 
        const article = new Article({
            title,
            content,
            categories,
            author,
        });
        await article.save();
        return NextResponse.json({ success: true, data: article })
    }catch(error){
        console.log(error);
        return NextResponse.json({ success: false, message: error })
    }
}