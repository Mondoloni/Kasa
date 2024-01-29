import React from 'react';
import { Link } from 'react-router-dom';




function Error(){
    return(
        <div className='error'>
            <h1 className='error-h1'>404</h1>
            <h2 className='error-h2'>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/" className='error-link'>
                <h3 className='error-link-h3'>Retourner sur la page d'accueil</h3>
            </Link>
        </div>
    )
}

export default Error