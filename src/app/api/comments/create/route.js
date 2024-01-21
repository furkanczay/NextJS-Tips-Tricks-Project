import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import { getJwtSecretKey } from "@/helpers/jwtHelper";
import Comment from "@/models/Comment";

export async function POST(request){
      const token = await getToken({req: request, secret: getJwtSecretKey()});
      const { fullname, email, detail, article } = await request.json();
      try{
            let comment;
            if(token){
                  console.log('Buraya geldi');
                  comment = await Comment.create({
                        detail,
                        user: token.id,
                        article
                  })
            }else{
                  comment = await Comment.create({
                        fullname,
                        email,
                        detail,
                        article
                  })
            }
            return NextResponse.json({
                  success: true,
                  data: comment
            })
      }catch(error){
            console.log(error);
            return NextResponse.json({
                  success: false,
                  message: error
            })
      }


}