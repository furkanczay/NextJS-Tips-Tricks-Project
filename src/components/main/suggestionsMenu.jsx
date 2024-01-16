export default function SuggestionsMenu( {setSelectedCategory} ) {

    function handleClick(e) {
        e.preventDefault();
        setSelectedCategory(e.target.innerText);
    }
    
    return (
        <>
            <div className="suggestionsMenu">
                <div className="feedbackBoard">
                    <h3>Frontend Mentor</h3>
                    <p>Feedback Board</p>
                </div>
                <div onClick={handleClick} className="tags">
                    <p>All</p>
                    <p>HTML</p>
                    <p>UX</p>
                    <p>JS</p>
                    <p>Bug</p>
                    <p>CSS</p>
                </div>
                <div className="roadmapView">
                    <div className="roadmap">
                        <h3>Roadmap</h3>
                        <div>
                            <img src="/images/oval2.png" alt="Oval Icon" />
                            <p>Planned</p>
                        </div>
                        <div>
                            <img src="/images/oval3.png" alt="Oval Icon" />
                            <p>In-Progress</p>
                        </div>
                        <div>
                            <img src="/images/oval1.png" alt="Oval Icon" />
                            <p>Live</p>
                        </div>
                    </div>
                    <div className="view">
                        <h3>View</h3>
                        <p>2</p>
                        <p>3</p>
                        <p>1</p>
                    </div>
                </div>
            </div>
        </>
    )
}