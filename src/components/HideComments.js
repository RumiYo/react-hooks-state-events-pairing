import React from "react";

function HideComments({ hideOn, changeHideStatus }){

    function clickButton(event){
        event.preventDefault();
        changeHideStatus();
    }
    
    const buttonText= hideOn? "Show Comments" : "Hide Comments"
    

    return(
        <div>
        <br/>
        <button onClick={clickButton} >{buttonText}</button>
        </div>
    )
}

export default HideComments;