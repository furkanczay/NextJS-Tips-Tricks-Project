import Article from "@/models/Article";
import dbConnect from "@/libs/database/dbConnect";
import { NextResponse } from "next/server";
export async function PUT(request, { params }){
      const { title, content } = await request.json()
      try{
            await dbConnect();
            const articleExist = await Article.findOne({title});
            if(articleExist){
                  return NextResponse.json({ success: false, message: 'Böyle bir yazı daha önce paylaşılmış!' }, { status:400 })
            } 
            const article = await Article.updateOne({slug: params.slug}, {
                  title,
                  content
            })
            return NextResponse.json({ success: true, data: article, message: 'Yazı başarıyla güncellendi' })
        }catch(error){
            console.log(error);
            return NextResponse.json({ success: false, message: error })
        }
}