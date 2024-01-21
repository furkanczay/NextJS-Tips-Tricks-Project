"use client"


import SuggestionsMenu from "@/components/main/suggestionsMenu";
import Suggestions from "@/components/main/suggestions";
import { useEffect, useState } from "react"
import { useSession } from "next-auth/react";
import useAdmin from "@/hooks/useAdmin";

export default function Home() {
    const [data, setData] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [filteredData, setFilteredData] = useState([])
    const [loading, setLoading] = useState(true);
    const isAdmin = useAdmin()
    
    useEffect(() => {
    async function getData(){
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
        const r = await res.json();
        setData(r.data);
        setLoading(false);
    }
    getData();
    }, [])

    useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredData(data);
        } else {
            setFilteredData(data.filter((item) => 
                item.categories.some((category) => category.name === selectedCategory)
            ));
        }
    }, [selectedCategory, data]);


  return (
    <>  
        <div className="container">
            <SuggestionsMenu setSelectedCategory={setSelectedCategory} />
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
                    {isAdmin && <button>+ Add Feedback</button>}
                </div>
                {loading && (
                    <div className="loadingScreen">
                        Loading
                    </div>
                )}
                {filteredData && (
                    <Suggestions filteredData={filteredData} /> 
                )}
                    
                {!loading && filteredData.length === 0 && (
                    <div className="suggestionsEmptyList">
                        <img src="/images/empty-icon.png" alt="Empty Icon" />
                        <h3>There is no feedback yet.</h3>
                        <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                        <button>+ Add Feedback</button>
                    </div>
                )}
                    
                        
                
                
            </div>
        </div>
    </>      
  );
}