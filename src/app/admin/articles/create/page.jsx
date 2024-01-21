"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import { toast } from 'sonner';

const ArticleCreatePage = () => {
      const router = useRouter()
      async function handleSubmit(e){
            e.preventDefault();
            const formData = new FormData(e.target)
            
            const title = formData.get("title");
            const content = formData.get("content");
            try{
                  const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/create`, {
                        method: 'POST',
                        body: JSON.stringify({
                              title,
                              content
                        })
                  })
                  const response = await request.json();
                  console.log(response);
                  if(!response.success){
                        return toast.error(response.message)
                  }
                  toast.success("Yazı başarıyla paylaşıldı");
                  return router.push('/admin/articles');
            }catch(error){
                  console.log(error);
                  toast.error(error.message)
            }
      }
  return (
    <div className="container col-6">
      <form method='POST' onSubmit={handleSubmit}>
            <label htmlFor="title">Başlık</label>
            <input className='form-control' type='text' name="title" id='title' />
            <label htmlFor="detail">İçerik</label>
            <input type="text" className='form-control' name="content" id='detail' />
            <button type='submit' className='btn btn-outline-primary'>Gönder</button>
      </form>
    </div>
  )
}

export default ArticleCreatePage