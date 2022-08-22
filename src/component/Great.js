import React from "react";

function Great(){
    const clicked = ()=>{
        console.log("button clicked");
    }
    return(
        <button onClick={clicked}></button>
    );
}
export default Great