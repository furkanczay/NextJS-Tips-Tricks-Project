import ArticleDetailPage from "@/components/main/pages/ArticleDetailPage";
import Article from "@/models/Article";
import { notFound } from "next/navigation";



async function getData(slug){
    try{
        const req = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`);
        if(!req.ok){
            throw new Error('HTTP Error')
        }
        const res = await req.json()
        const article = res.data;
        return article;
    }catch(error){
        console.log(error);
        return notFound();
    }
    
}


export default async function DetailPage({ params }) {
    const { slug } = params;
    const data = await getData(slug)


    return (
        <ArticleDetailPage data_backend={data} />
    )
}