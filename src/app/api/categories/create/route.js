import { NextResponse } from "next/server";
import dbConnect from "@/libs/database/dbConnect";
import Category from "@/models/Category";
import { getToken } from "next-auth/jwt";
import { getJwtSecretKey } from "@/helpers/jwtHelper";

export async function POST(request){
      const token = await getToken({req: request, secret: getJwtSecretKey()});
      if(!token || !token.role || token.role !== 'admin'){
            return NextResponse.json({
                  success: false,
                  message: 'Yetkisiz kullanıcı!'
            }, {status: 401});
      }
      const {name} = await request.json();
      try{
            await dbConnect();
            const isExist = await Category.findOne({name});
            if(isExist){
                return NextResponse.json({ success: false, message: 'Böyle bir kategori zaten var!' })
            } 
            const category = await Category.create({name})
            return NextResponse.json({ success: true, data: category }, {status: 201})
        }catch(error){
            console.log(error);
            return NextResponse.json({ success: false, message: error }, {status: 500})
        }
}