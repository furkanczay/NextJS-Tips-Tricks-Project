"use client"
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const ArticleDetailPage = ({ data_backend }) => {
      const [data, setData] = useState({})
      const [countChar, setCountChar] = useState(0)

      useEffect(() => {
            async function getData(){
                  setData(data_backend)
            }
            getData();
      }, [data_backend]) 

      console.log(data);


    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.comment.value)
    }
  return (
      <div className="detailContainer">
      <div className="detailHeader">
          <Link href='/'>Go Back</Link>
          <button>Edit Feedback</button>
      </div>

      <div className="suggestionsList">
          <div className="suggestion">
              <div className="rank">
                  <Image src="/images/arrow-up.svg" alt="Up Arrow" width={20} height={20} />
                  {data.likes && 
                      <p>{data.rank}</p>
                  }
              </div>
              <div className="tipsAndTricks">
                  <h3>{data.title}</h3>
                  <p>{data.content}</p>
                  <div className="category">
                      {data.categories && data.categories.map((category, index) => (
                          <h4 key={index}>{category.name}</h4>
                      ))}
                  </div>    
              </div>
          </div>
          <div className="comment">
              <span>user images</span>
              <p>{}</p>
          </div>
      </div>


      <div className="comments">
          <h1>{data?.comments?.length} Comments</h1>

          {
              data.comments && data.comments.map((comment, index) => (
                  <div className="comment" key={index}>
                      {comment.user ? (
                        <>
                            <span><Image src={`/${comment.user.profile_image}`} width={50} height={50} alt={`${comment.user.username} avatar`} /></span>
                            <div className="commentContent">
                                <div className="user">
                                    <h2>{comment.user.firstName} {comment.user.lastName}</h2>
                                    <p>@{comment.user.username}</p>    
                                </div>
                                <p>{comment.detail}</p>
                            </div>
                        </>
                      ) : (
                        <>
                            <span><Image src={`/default-avatar.jpg`} width={50} height={50} alt={`${comment.fullname} avatar`} /></span>
                            <div className="commentContent">
                                <div className="user">
                                    <h2>{comment.fullname}</h2>
                                    <p>@{comment.email}</p>    
                                </div>
                                <p>{comment.detail}</p>
                            </div>
                        </>
                      )}
                  </div>
              ))
          }
      </div>    


      <div className="addComment">
          <h1>Add Comment</h1>
          <form onSubmit={handleSubmit}>
              <textarea maxLength='250' type="text" name="comment" onChange={(e) => setCountChar(e.target.value.length)} />
              <div className="formBottom">
                  <p>{250 - countChar} Characters left</p>            
                  <button type="submit">Post Comment</button>
              </div>
          </form>
      </div>
  </div>
  )
}

export default ArticleDetailPage