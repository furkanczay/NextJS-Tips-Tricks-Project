"use client"


import SuggestionsMenu from "@/components/main/suggestionsMenu";
import Suggestions from "@/components/main/suggestions";
import { Suspense, useEffect, useState } from "react"

export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
    async function getData(){
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
        const r = await res.json();
        console.log(r);
        setData(r.data);
    }
    getData();
    }, [])

    console.log(data)
  return (
    <>  
        <div className="container">
            <SuggestionsMenu />
            <div className="suggestions">
                <div className="suggestionsHeader">
                    <div className="headerLeftSide">
                        <div className="suggest">
                            <img src="/images/vector.svg" alt="Vector Icon" />
                            <h3>{`${data.length} Suggestions`}</h3>
                        </div>
                        <div className="sortBy">
                            <p>Sort By :</p>
                            <select name="" id="">
                                <option value="">Most Upvotes</option>
                                <option value="">Least Upvotes</option>
                                <option value="">Most Comments</option>
                                <option value="">Least Comments</option>
                            </select>
                        </div>
                    </div>
                    <button>+ Add Feedback</button>
                </div>
                
                {data && data.length === 0 ?
                    <div className="suggestionsEmptyList">
                        <img src="/images/empty-icon.png" alt="Empty Icon" />
                        <h3>There is no feedback yet.</h3>
                        <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                        <button>+ Add Feedback</button>
                    </div>
                    :
                    <Suggestions data={data} />     
                }
                
            </div>
        </div>
    </>      
  );
}
