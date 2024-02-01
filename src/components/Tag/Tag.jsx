import React from "react";


function Tag({data}){

    return (
        data.map((tag,index)=>(
            <h3 className="description-tag-h3" key={index}>{tag}</h3>
    ))
    )
}


export default Tag