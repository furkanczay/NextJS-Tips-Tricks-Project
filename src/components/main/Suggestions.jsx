import Link from "next/link"

export default function Suggestions({ data }) {

    return (
        <>
            {
                data.map((data, index) => (
                    <div className="suggestionsList" key={index}>
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
                            <img src="/images/comment-icon.svg" alt="Comment Icon " />
                            <p>{data.comments}</p>
                        </div>
                    </div>
                ))
            }
        </>
    )
}