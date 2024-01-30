import React from "react";
import retour from "../../assets/bouton/Fleche_Retour_Carrousel.png";
import avance from "../../assets/bouton/Fleche_Avance_Carrousel.png";
import { useState } from "react";

function Carrousel({pictures}){

    const [indexImage,setIndex]=useState(0)
    const one=(pictures.length>1)?(false):(true)

    const precedente = () =>{
    setIndex(indexImage===0?pictures.length-1:indexImage-1)
    }

    const futur = () =>{
        setIndex(indexImage===pictures.length-1?0:indexImage+1)
        }


    return (
        <div className={`carrousel ${one && "one"}`}>
            <img src={retour} alt="Retour" className="carrousel-retour" onClick={precedente}></img>
            <img src={pictures[indexImage]} alt="pictures" className="carrousel-image"></img>
            <h1 className="carrousel-page">{indexImage+1}/{pictures.length}</h1>
            <img src={avance} alt="Avance" className="carrousel-avance" onClick={futur}></img>
        </div>
    )
}

export default Carrousel