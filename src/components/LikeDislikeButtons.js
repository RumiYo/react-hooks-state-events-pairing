import React from "react";

function LikeDislikeButtons({upvotes, increaseUpvotes, downvotes, increaseDownvotes }){

    function countUpvotes(){
        const currentUpvotes = upvotes + 1;
        increaseUpvotes(currentUpvotes);
    }

    function countDownvotes(){
        console.log("clicked")
        const currentDownvotes = downvotes + 1;
        increaseDownvotes(currentDownvotes);s
    }

    return (
        <div className="buttons">
            <button onClick={countUpvotes} >{upvotes} 👍</button>
            <button onClick={countDownvotes} >{downvotes} 👎</button>
        </div>
    )
}

export default LikeDislikeButtons;