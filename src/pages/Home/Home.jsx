import React from 'react';
import '../../index.scss';
import Banner from '../../components/Banner/Banner';
import banner_accueil from '../../assets/banner/banner_accueil.png';
import { useFetch } from '../../style/Hooks/Hooks';
import { Loader } from '../../style/utils/Atom';
import Card from '../../components/Card/Card';
import Error from '../../components/Error/Error';


 
function Home(){

const {data,isLoading,error}=useFetch('./logements.json')
if (error) {
    return <Error />
  }
    return (
        
        <div className='body'>
            <Banner image={banner_accueil} texte="Chez vous, partout et ailleurs"/>
            <div className='card'>
                {isLoading ? (
                    <Loader/>
                ):(
                    
                    data.map((annonce)=>(
                        <Card
                        key={annonce.id}
                        title={annonce.title}
                        cover={annonce.cover}
                        link={`/Logement/${annonce.id}`}
                        />
                    )
                )
                )}
               
           </div>   
        </div>
    )
}

export default Home