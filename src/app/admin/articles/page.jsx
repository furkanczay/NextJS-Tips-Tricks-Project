import Article from '@/models/Article'
import User from '@/models/User'
import Link from 'next/link';
import React from 'react'

const getData = async () => {
      const articles = await Article.find().populate('author');
      return articles;
}

const ArticlesPage = async () => {
      const articles = await getData();
      console.log(articles);
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
                  {articles?.map((article, index) => (
                        <tr key={index}>
                              <td>{article.title}</td>
                              <td>{article.slug}</td>
                              <td>{new Date(article.createdAt).toLocaleString()}</td>
                              <td>{article.author.firstName} {article.author.lastName}</td>
                              <td>
                                    <button className='btn btn-dark'>Düzenle</button>
                                    <button className='btn btn-danger ms-3'>Sil</button>
                              </td>
                        </tr>
                  ))}
            </tbody>
      </table>
    </div>
  )
}

export default ArticlesPage