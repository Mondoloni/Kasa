import React from 'react';
import { useFetch } from '../../style/Hooks/Hooks';
import Carrousel from '../../components/Carrousel/Carrousel';
import { Loader } from '../../style/utils/Atom';
import Error from '../../components/Error/Error';
import { useParams } from 'react-router-dom';
import Tag from '../../components/Tag/Tag';
import Stars from '../../components/Stars/Stars';
import Collapse from '../../components/Collapse/Collapse';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';


function Logement(){
    
    const { logementId } = useParams()
    const {data,isLoading,error}=useFetch('./../logements.json')

    if (error) {
    return <Error />
    }

let annonceSelect
let identite
let listeEquipements =[]
if(!isLoading)
  {
    annonceSelect = data.find(annonce=>annonce.id === logementId)
    if(annonceSelect!==undefined){
        identite=annonceSelect.host.name.split(' ')
        listeEquipements=annonceSelect.equipments.map((equ,index)=>{
            return <li key={index}>{equ}</li>
        })
    
    }
  
    }

    return(
        <div className='logement'>
          {
          isLoading ? (
                    <Loader/>
                ):(
            (annonceSelect!==undefined) ?(
            <section>
                        <Carrousel
                        pictures={annonceSelect.pictures}
                        />
                <div className='description'>
                    <div className='titre_tags'>
                        <h2 className='description-titre'>{annonceSelect.title}</h2>
                        <h3 className='description-localisation'>{annonceSelect.location}</h3>
                        <div className='description-tag'><Tag data={annonceSelect.tags} /></div>
                    </div>
                    <div className='nom_etoiles'>
                        <div className='nom_etoiles-div'>
                            <div className='nom_etoiles-identite'>
                                <h3 className='nom_etoiles-identite-h3'>{identite[0]}</h3>
                                <h3 className='nom_etoiles-identite-h3'>{identite[1]}</h3>
                            </div>
                            <img src={annonceSelect.host.picture} alt={annonceSelect.host.name} className='nom_etoiles-div-img'></img>
                        </div>
                            <Stars
                            rating={parseInt(annonceSelect.rating)}
                            />
                    </div>
                </div>
                <div className='dropdown'>
                    <Collapse
                     key="description"
                     title="Description"
                     texte={annonceSelect.description}
                    />
                    <Collapse
                     key="equipements"
                     title="Équipements"
                     texte={listeEquipements}
                    />
                </div>
            </section>
                ):(<Navigate replace to="/404/"></Navigate>))}
      
            
         </div>
    )
}

export default Logement