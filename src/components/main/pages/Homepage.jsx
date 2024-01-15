"use client"

import SuggestionsMenu from "@/components/main/suggestionsMenu";
import { useState, useEffect } from "react";

export default function Homepage({ data }) {
  const [suggestions, setSuggestions] = useState([]);

  console.log(data)
  useEffect(() => {
    setSuggestions(data);
  }, [])




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

                {data.length === 0 &&
                    <div className="suggestionsEmptyList">
                        <img src="/images/empty-icon.png" alt="Empty Icon" />
                        <h3>There is no feedback yet.</h3>
                        <p>Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
                        <button>+ Add Feedback</button>
                    </div>
                }

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
                                    <h3>{data.title}</h3>
                                    <p>{data.content}</p>
                                    <div className="category">
                                        {data.categories && data.categories.map((category, index) => (
                                            <h4 key={index}>{category}</h4>
                                        ))}
                                    </div>    
                                </div>
                            </div>
                            <div className="comment">
                                <img src="/images/comment-icon.svg" alt="Comment Icon" />
                                <p>{data.comments}</p>
                            </div>
                        </div>


                    ))
                }
                
                
            </div>
        </div>





    </>      
  );
}