import React from "react";

function Comment({commentData}){
    return (
        <div>
            <h4>{commentData.user}</h4>
            <p>{commentData.comment}</p>
        </div>
    )
}

export default Comment;