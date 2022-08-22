import React from 'react';

function Card(props) {
    const a = props.myobject;
    const tmp = a.map((i) =>
    <div className='container'>
    <div className="card" key = {i.id}>
        <img src = {i.image} className = "course_img" />
        <div>
            <h5 className="card-title">{i.title}</h5>
            <p className="card-text">{i.author}.</p>
            <span> <b>{i.rating} </b></span>
            <i className = "fa fa-solid fa-star checked"> </i>
            <i className = "fa fa-solid fa-star checked"> </i>
            <i className = "fa fa-solid fa-star checked"> </i>
            <i className = "fa fa-solid fa-star checked"> </i>
            <i className = "fa fa-solid fa-star-half checked"> </i> 
            <span>{'('} {i.people} {')'} </span>
        </div>
        <div>
            <b>{"E£"} {i.price}</b>
        </div>
    </div>
    </div>
    )
    return  <div> { tmp } </div>
    
}

export default Card