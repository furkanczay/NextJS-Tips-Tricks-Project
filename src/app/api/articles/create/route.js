import { NextResponse } from "next/server";
import Article from "@/models/Article";

export async function POST(request) {
    const {title, content, categories, author} = await request.json();
    try{
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