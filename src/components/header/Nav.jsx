import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import HamburgerMenu from '../../img/hamburger-list-menu.svg'

const Nav = () => {
    const [flag, setFlag] = useState(true)
    const [flagBurger, setFlagBurger] = useState(false)

    useEffect(() => {
        window.addEventListener('resize', handlerResize)
        
        let innerWindow = window.innerWidth

        if(innerWindow <= 1200){
            setFlag(false)
        }
    },[])

    const handlerResize = () => {
        let innerWindow = window.innerWidth
        if(innerWindow <= 1200){
            setFlag(false)
        }else{
            setFlag(true)
        }

    }

    const handlerClickMenu = () => {
        setFlagBurger(!flagBurger)
    }

    return(
        <>
            {   flag ?
                <ul className='header_navbar'>
                <li><NavLink  to='/main'>Main</NavLink></li>
                <li><NavLink  to='/pokedex'>Pokedex</NavLink></li>
                <li><NavLink  to='/favorite'>Favorite</NavLink></li>
                <li><NavLink  to='/search'>Search</NavLink></li>
            </ul> : 
                <div className='burger_menu'>
                    <img src={HamburgerMenu} alt="#" onClick={handlerClickMenu}/>
                    {   flagBurger ?
                        <ul className='header_navbar_burger'>
                            <li><NavLink  to='/main'>Main</NavLink></li>
                            <li><NavLink  to='/pokedex'>Pokedex</NavLink></li>
                            <li><NavLink  to='/favorite'>Favorite</NavLink></li>
                            <li><NavLink  to='/search'>Search</NavLink></li>
                        </ul> : ''  
                    }
                </div>
            }
            
        </>
    )
}

export default Nav