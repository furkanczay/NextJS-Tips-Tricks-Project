import dbConnect from "@/libs/database/dbConnect";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request){
    await dbConnect();
    const {username, password, email, firstName, lastName} = await request.json();
    try{
        const user = new User({
            username,
            password,
            email,
            firstName,
            lastName
        });
        await user.save();
        return NextResponse.json({ success: true, data: user })
    }catch(error){
        console.log(error);
        return NextResponse.json({ success: false, message: error })
    }

}