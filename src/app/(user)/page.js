import Homepage from '@/components/main/pages/Homepage';
import dbConnect from '@/libs/database/dbConnect';
import Article from '@/models/Article';
import User from '@/models/User';
import Category from '@/models/Category';

async function getData(){
  await dbConnect();
  try{
    const res = await Article.find({}).populate({path: 'author'}).lean();
    console.log(res);
    return res;
  }catch(error){
    return error;
  }
}

export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <Homepage data={data}/>
  )
}
