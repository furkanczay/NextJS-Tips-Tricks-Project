"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link"


export default function DetailPage() {
    const [data, setData] = useState([])
    const [countChar, setCountChar] = useState(0)

    const { slug } = useParams();

    useEffect(() => {
        async function getData(){
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`);
            const r = await res.json();

            setData(r.data);
        }
        getData();
    }, []) 


    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.comment.value)
    }


console.log(data)

    return (
        <div className="detailContainer">
            <div className="detailHeader">
                <Link href='/'>Go Back</Link>
                <button>Edit Feedback</button>
            </div>

            <div className="suggestionsList">
                <div className="suggestion">
                    <div className="rank">
                        <img src="/images/arrow-up.svg" alt="Up Arrow" />
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
                <h1>4 Comments</h1>

                {
                    data.comments.map((comment, index) => (
                        <div className="comment" key={index}>
                            <span></span>
                            <div className="commentContent">
                                <div className="user">
                                    <h2>Firstname Lastname</h2>
                                    <p>@Username</p>    
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