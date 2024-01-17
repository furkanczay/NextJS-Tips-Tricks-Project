import ArticleDetailPage from "@/components/main/pages/ArticleDetailPage";
import { notFound } from "next/navigation";


async function getData(slug){
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`).then(res => res.json());
    if(!response.success){
      return notFound();
    }
    return response.data;
    
}


export default async  function DetailPage({ params }) {
    const { slug } = params;
    const data = await getData(slug)


    return (
        <ArticleDetailPage data_backend={data} />
    )
}