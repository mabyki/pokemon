import React from 'react'
import { Link } from 'react-router-dom'
import LogoImage from '../../img/logo_pokemon.png'

const Logo = () => {
    return(
        <>
            <Link to='/'><img className='logo_img' src={LogoImage} alt="#"/></Link>
        </>
    )
}

export default Logo