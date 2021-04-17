import React from 'react'
import FooterSocial from './FooterSocial'
import Facebook from '../../img/facebook.png'
import Youtube from '../../img/youtube.png'
import Twitter from '../../img/twitter.png'
import Instagram from '../../img/instagram.png'

const Footer = () => {

    const socialUrl = [
        'https://www.facebook.com/PokemonUKGB',
        'https://www.youtube.com/user/Pokemon',
        'https://twitter.com/PokemonNewsUK',
        'https://www.instagram.com/PokemonNewsUK/'
    ]

    const socialImg = [
        Facebook,
        Youtube,
        Twitter,
        Instagram
    ]

    return(
            <div className="footer">
                <FooterSocial 
                socialUrl={socialUrl}
                socialImg={socialImg}
                />
            </div>
    )
}

export default Footer