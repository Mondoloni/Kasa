import React from "react";
import banner_apropos from '../../assets/banner/banner_accueil.png';


function Banner({image,texte}){

    return (
        <div className='banner'>
            <img className="banner-img" src={image} alt="Banner"></img>
            <h3 className="banner-texte">{texte}</h3>
        </div>
    )
}

export default Banner