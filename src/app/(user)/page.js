import Homepage from '@/components/main/pages/Homepage';
import dbConnect from '@/libs/database/dbConnect';
import Article from '@/models/Article';
import User from '@/models/User';
import Category from '@/models/Category';

async function getData(){
  await dbConnect();
  const res = await Article.find({}).populate('author').populate('categories');
  if(!res){
    throw new Error('Failed to fetch data');
  }
  return res;
}

export default async function Home() {
  const data = await getData();
  return (
    <Homepage data={data}/>
  )
}
