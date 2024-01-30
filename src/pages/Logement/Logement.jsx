import React from 'react';
import { useFetch } from '../../style/Hooks/Hooks';
import Carrousel from '../../components/Carrousel/Carrousel';
import { Loader } from '../../style/utils/Atom';
import Error from '../../components/Error/Error';
import { useParams } from 'react-router-dom';


function Logement(){
    
    const { logementId } = useParams()
    const {data,isLoading,error}=useFetch('./../logements.json')

    if (error) {
    return <Error />
    }

    let annonceSelect
  if(!isLoading){annonceSelect = data.filter(annonce=>annonce.id === logementId)

}
        
    return(
        <div className='logement'>
          {isLoading ? (
                    <Loader/>
                ):(
                    // <div>
                        <Carrousel
                        pictures={annonceSelect[0].pictures}
                        />
                // </div>
                )}
      
         </div>
    
    )
}

export default Logement