import React from 'react'

const FooterSocial = ({socialUrl, socialImg}) => {
    return(
        <div className="footer_social">
            {socialUrl.map((item, i) => {
                return(
                    <a href={item} key={i} target='_blank'> <img src={socialImg[i]} alt="#"/> </a>
                )
            })} 
        </div>
    )
}

export default FooterSocial