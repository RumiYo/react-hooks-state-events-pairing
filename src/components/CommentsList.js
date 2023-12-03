import React from "react";
import Comment from "./Comment";

function CommentsList({ commentsData, hideOn }){

    let displayedComments = "";

    if(hideOn===false){
        displayedComments = commentsData.map(commentData => <Comment key={commentData.id} commentData={commentData} />)
    }



    return (
        <div>
            <hr/>
            <h2>{commentsData.length} Comments</h2>
            {displayedComments}
        </div>
    )
}

export default CommentsList;