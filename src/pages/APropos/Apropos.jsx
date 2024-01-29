import React from 'react';
import '../../index.scss';
import Banner from '../../components/Banner/Banner';
import banner_apropos from '../../assets/banner/banner_apropos.png';
import { useFetch } from '../../style/Hooks/Hooks';
import { Loader } from '../../style/utils/Atom';
import Collapse from '../../components/Collapse/Collapse';
import Error from '../../components/Error/Error';


 
function APropos(){
    const {data,isLoading,error}=useFetch('./aproposTexte.json')
    if (error) {
        return <Error />
      }

    return (
        
        <div className='body'>
            <Banner image={banner_apropos} texte=""/>
            <div className="apropos">
            {isLoading ? (
                    <Loader/>
                ):(
                    
                    data.map((about,index)=>(
                        <Collapse 
                        key={`${about.aboutTitle}-${index}`}
                        title={about.aboutTitle}
                        texte={about.aboutText}
                        />
                    )
                )
                )}
           </div>   
        </div>
    )
}

export default APropos
