import { NextResponse } from "next/server";
import Article from "@/models/Article";
import dbConnect from "@/libs/database/dbConnect";
import { getToken } from "next-auth/jwt";
import { getJwtSecretKey } from "@/helpers/jwtHelper";

export async function DELETE(request, { params }) {
      const token = await getToken({req: request, secret: getJwtSecretKey()});
      if(!token || !token.role || token.role !== 'admin'){
          return NextResponse.json({
              success: false,
              message: 'Yetkisiz kullanıcı!'
          }, {status: 401});
      }
      
      try{
          await dbConnect();
          const article = await Article.deleteOne({slug: params.slug})
          return NextResponse.json({ success: true, data: article, message: 'Yazı başarıyla silindi' })
      }catch(error){
          console.log(error);
          return NextResponse.json({ success: false, message: error })
      }
  }