import React from "react";
import etoilePleine from "../../assets/bouton/Etoile_pleine.png";
import etoileVide from "../../assets/bouton/Etoile_vide.png"

function Stars({rating}){

    let etoilesLogement =[]
    let indexEtoiles=1
    for(let i=0;i<rating;i++){
        etoilesLogement.push(<img src={etoilePleine} alt={`${rating}/5`} key={indexEtoiles}/>)
        indexEtoiles++
    }

 
    for(let i=0;i<5-rating;i++){
        etoilesLogement.push(<img src={etoileVide} alt={`${rating}/5`} key={indexEtoiles}/>)
        indexEtoiles++
    }
  
    return (
        <div className="nom_etoiles-etoiles">
          {etoilesLogement}
          </div>

    )
}

export default Stars