"use client"
import Loading from '@/app/admin/loading';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';

const ArticleEditPage = ({ params }) => {
      const router = useRouter()
      const [data, setData] = useState({})
      const [loading, setLoading] = useState(true);
      const [formData, setFormData] = useState({
            title: '',
            content: '',
      });
      async function handleSubmit(e) {
            e.preventDefault();
            try {
              const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/update/${params.slug}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
              });
              const response = await request.json();
              if (!response.success) {
                toast.error(response.message);
              } else {
                toast.success(response.message);
                return router.push('/admin/articles')
              }
            } catch (error) {
              console.error('Error updating article:', error);
            }
          }

      const handleChange = (e) => {
            setFormData({
              ...formData,
              [e.target.name]: e.target.value,
            });
          };

      useEffect(() => {
            async function getData(){
                  try{
                        const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${params.slug}`);
                        const response = await request.json()
                        if(!response.success){
                              toast.error(response.message)
                        }
                        setData(response.data)
                        setLoading(false);
                        setFormData(response.data);
                  }catch(error){
                        console.log(error);
                  }
            }
            getData();
      }, [params.slug])
  return (
    <>
      { loading && <Loading/>}
      {!loading && (
            <>
                  <h1>{data.title} - Düzenleniyor</h1>
                  <form method="POST" onSubmit={handleSubmit}>
                        <label className='form-label' htmlFor="title">Yazı Başlığı</label>
                        <input
                              type="text"
                              id="title"
                              name="title"
                              className='form-control'
                              value={formData.title}
                              onChange={handleChange}
                        />
                        <label className='form-label' htmlFor="content">Yazı İçeriği</label>
                        <input
                              type="text"
                              id="content"
                              name="content"
                              className='form-control'
                              value={formData.content}
                              onChange={handleChange}
                        />
                        <button className='btn btn-success mt-3' type="submit">Güncelle</button>
                  </form>
            </>
      )}
      
    </>
  )
}

export default ArticleEditPage