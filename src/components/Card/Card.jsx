import React from 'react';
import { Link } from "react-router-dom";

function Card({title,cover,link}){
    return(
        
            <div className='card-div'>
                <Link to={link} className='card-link'>
                <img src={cover} alt={title}></img>
                <h4 className='card-titre'>{title}</h4>
                </Link>
            </div>
    )
}

export default Card
