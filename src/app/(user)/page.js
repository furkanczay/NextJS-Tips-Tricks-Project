import Homepage from '@/components/main/pages/Homepage';
import Article from '@/models/Article';

async function getData(){
  const res = await Article.find({}).populate('author').populate('categories');
  return res;
}

export default async function Home() {
  const data = await getData();
  return (
    <Homepage data={data}/>
  )
}
