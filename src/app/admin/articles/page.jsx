"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { toast } from 'sonner';


const ArticlesPage = () => {
      const router = useRouter()
      const [data, setData] = useState([]);
      const [loading, setLoading] = useState(true)
      const [refreshData, setRefreshData] = useState(false);
      async function handleDelete(slug){
            if(confirm('Silmek istediğinize emin misiniz?')){
                  try{
                        const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/delete/${slug}`,
                              {
                                    method: 'DELETE'
                              }
                        );
                        const response = await request.json();
                        if(!response.success){
                              toast.error(response.message)
                        }
                        toast.success(response.message);
                        setRefreshData(true)
                  }catch(error){
                        console.log(error);
                  }
            }
      }

      useEffect(() => {
            async function getData(){
                  try{
                        const request = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
                        const response = await request.json()
                        if(!response.success){
                              return toast.error(response.message);
                        }
                        setData(response.data);
                        setLoading(false);
                        setRefreshData(false);
                  }catch(error){
                        console.log(error);
                  }
            }
            getData();
      }, [refreshData])
  return (
    <div>
      <Link href="/admin/articles/create" className='btn btn-primary'>Yeni Trick Ekle</Link>
      <table className='table table-hover table-borderless'>
            <thead>
                  <tr>
                        <th>Başlık</th>
                        <th>Slug</th>
                        <th>Yayınlanma Tarihi</th>
                        <th>Yayınlayan</th>
                        <th>İşlemler</th>
                  </tr>
            </thead>
            <tbody className='table-group-divider'>
                  {loading && <tr><td>Loading...</td></tr>}
                  {!loading && data?.map((article, index) => (
                        <tr key={index}>
                              <td>{article.title}</td>
                              <td>{article.slug}</td>
                              <td>{new Date(article.createdAt).toLocaleString()}</td>
                              <td>{article.author.firstName} {article.author.lastName}</td>
                              <td>
                                    <button onClick={() => router.push(`/admin/articles/edit/${article.slug}`)} className='btn btn-dark'>Düzenle</button>
                                    <button onClick={() => handleDelete(article.slug)} className='btn btn-danger ms-3'>Sil</button>
                              </td>
                        </tr>
                  ))}
            </tbody>
      </table>
    </div>
  )
}

export default ArticlesPage