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




    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formObj = Object.fromEntries(formData);
        const firstname = formObj.username.split(' ')[0];
        const lastname = formObj.username.split(' ')[1];
        const detail = formObj.detail;
        const email = formObj.email;
        const article = data._id;
        const fullname = formObj.username;
        const username = formObj.username.split(' ').join('');
        console.log(article);
        console.log(firstname);
        console.log(lastname);
        console.log(detail);
        console.log(email);

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                article: article,
                detail: detail,
                fullname: fullname,
                username: username,
                firstname: firstname,
                lastname: lastname,
                email: email,
            }),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
        })
    }

    // article = "65a61f60b7dbe60309d22266"
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
                        { comment.user && <span><Image src={`/${comment.user.profile_image}`} width={50} height={50} alt={`${comment.user.username} avatar`} /></span>}
                        <div className="commentContent">
                            <div className="user">
                                { comment.user ?
                                    <>
                                        <h2>{comment.firstName} {comment.lastName}</h2>
                                        <p>@{comment.username}</p>
                                    </>
                                    :
                                    <>
                                        <h2>{comment.firstName} {comment.lastName}</h2>
                                        <p>@{comment.username}</p>
                                    </>
                                } 
                            </div>
                            <p>{comment.detail}</p>
                        </div>
                    </div>
                ))
            }
        </div>    


        <div className="addComment">
            <h1>Add Comment</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='name?, lastname?..' name='username' /> <br />
                <input type="email" placeholder='email?' name='email' /> <br />
                <textarea maxLength='250' type="text" name="detail" onChange={(e) => setCountChar(e.target.value.length)} />
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