import Article from "@/models/Article";
import { NextResponse } from "next/server";

export async function GET(request, { params }){
      const { slug } = params;
      try{
            const article = await Article.findOne({slug}).populate('author', 'username');
            return NextResponse.json(article, {status: 200});
      }catch(error){
            return NextResponse.error(error, {status: 500});
      }
}