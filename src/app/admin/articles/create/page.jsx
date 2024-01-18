import React from 'react'

const ArticleCreatePage = () => {
      async function handleSubmit(formData){
            'use server'
            const title = formData.get("title");
            const content = formData.get("content");
            const body = {
                  title,
                  content
            }
            console.log(body);
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/create`, {
                  method: 'POST',
                  body: JSON.stringify(body)
            }).then(res => res.json())
            console.log(response);
      }
  return (
    <div className="container col-6">
      <form action={handleSubmit}>
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