import React from "react";
import { useState } from "react";
import icon from '../../assets/collapse/chevron.png'


function Collapse({texte, title}){
    const [active,setActive]=useState(false)


    const handleToggle = e =>{
        setActive(!active)
    }
    return(
        // <div className="collapse">
            <div className={`collapse-div ${active && "active"}`}>
                <h3 className="collapse-title" onClick={handleToggle}>{title}
                <img src={icon} className="collapse-icon" alt="Ouvrir le collapse"></img>
                </h3>
                <h3 className="collapse-texte">{texte}</h3>
            </div>
        // </div>
    )
}

export default Collapse