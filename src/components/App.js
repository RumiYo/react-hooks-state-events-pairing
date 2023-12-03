import video from "../data/video.js";
import React, {useState} from "react";
import VideoAndDetails from "./VideoAndDetails.js";
import LikeDislikeButtons from "./LikeDislikeButtons";
import HideComments from "./HideComments";
import CommentsList from "./CommentsList";

function App() {
  console.log("Here's your data:", video);
  const commentsData = video.comments;

  const [ upvotes, setUpvotes ] = useState(video.upvotes)
  const [ downvotes, setDownvotes ] = useState(video.downvotes)
  
  function increaseUpvotes(newNumber){
    setUpvotes(newNumber);
  }
  function increaseDownvotes(newNumber){
    setDownvotes(newNumber);
  }

  const [ hideOn, setHideOn ] = useState(false);
  function changeHideStatus(){
    setHideOn(!hideOn);
  }


  return (
    <div className="App">
      <VideoAndDetails video={video}/>
      <LikeDislikeButtons upvotes={upvotes} increaseUpvotes={increaseUpvotes} downvotes={downvotes} increaseDownvotes={increaseDownvotes}/>
      <HideComments hideOn={hideOn} changeHideStatus={changeHideStatus} />
      <CommentsList commentsData={commentsData} hideOn={hideOn} />
    </div>
  );
}

export default App;
