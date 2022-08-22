import React from "react";
const Header = props => {
    console.log(props);
        return (
            <div className="Description">
            <h1>
                {props.myobject.head}
            </h1>
            <p>
                {props.myobject.description}
            </p>
            <button className="course_btn"> {props.myobject.buttonValue} </button>
            </div>
        )
}
export default Header;