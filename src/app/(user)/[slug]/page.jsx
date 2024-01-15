"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link"


export default function DetailPage() {
    const [data, setData] = useState([])
    const [countChar, setCountChar] = useState(0)

    const { slug } = useParams();
    console.log(slug)

    useEffect(() => {
        async function getData(){
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${slug}`);
            const r = await res.json();

            setData(r);
        }
        getData();
    }, []) 

    console.log(data)

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
                        <img src="/images/arrow-up.svg" alt="Up Arrow" />
                        {data.likes && 
                            <p>{data.rank}</p>
                        }
                    </div>
                    <div className="tipsAndTricks">
                        <h3><Link href={`/${data.slug}`}>{data.title}</Link></h3>
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

                <div className="comment">
                    <span></span>
                    <div className="commentContent">
                        <div className="user">
                            <h2>Firstname Lastname</h2>
                            <p>@Username</p>    
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur deleniti voluptates eum laboriosam temporibus quaerat itaque distinctio numquam. Libero esse, blanditiis rerum quis ipsa tenetur in mollitia dignissimos exercitationem tempore.</p>
                    </div>
                </div>
                <div className="comment">
                    <span></span>
                    <div className="commentContent">
                        <div className="user">
                            <h2>Firstname Lastname</h2>
                            <p>@Username</p>    
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur deleniti voluptates eum laboriosam temporibus quaerat itaque distinctio numquam. Libero esse, blanditiis rerum quis ipsa tenetur in mollitia dignissimos exercitationem tempore.</p>
                    </div>
                </div>
                <div className="comment">
                    <span></span>
                    <div className="commentContent">
                        <div className="user">
                            <h2>Firstname Lastname</h2>
                            <p>@Username</p>    
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur deleniti voluptates eum laboriosam temporibus quaerat itaque distinctio numquam. Libero esse, blanditiis rerum quis ipsa tenetur in mollitia dignissimos exercitationem tempore.</p>
                    </div>
                </div>
                <div className="comment">
                    <span></span>
                    <div className="commentContent">
                        <div className="user">
                            <h2>Firstname Lastname</h2>
                            <p>@Username</p>    
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur deleniti voluptates eum laboriosam temporibus quaerat itaque distinctio numquam. Libero esse, blanditiis rerum quis ipsa tenetur in mollitia dignissimos exercitationem tempore.</p>
                    </div>
                </div>
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