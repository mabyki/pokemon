import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Abilities from './Abilities'
import BasicStats from './BasicStats'
import Stats from './Stats'
import Types from './Types'



const PokemonCard = () => {
    const [pokemonCard, setPokemonCard] = useState([])
    const [fetching, setFetching] = useState(false)
    const location = useLocation()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${location.state.item.name}`)
        .then(response => response.json())
        .then(result => setPokemonCard(prev => [...prev,result]))
        .then(() => setFetching(true))
    }, [])

    const handlerAddFavorite = () => {
        if(!localStorage.getItem('favorite')){

            localStorage.setItem('favorite', JSON.stringify(pokemonCard))
        }else{
            let favorite = JSON.parse(localStorage.getItem('favorite'))
            let find = favorite.some((item) => {
                return item.id === pokemonCard[0].id
            })
            if(!find){
                localStorage.setItem('favorite', JSON.stringify(favorite.concat(pokemonCard)))
            }
        }
    }
    
    return(
        <div className='pokemon_card_container'>
            {fetching ?
                    <div className='pokemon_card'>
                        <span className='name'>
                            {pokemonCard[0].name}
                        </span>
                        <div className='pokemon_card_all'>
                                <div className='pokemon_card_img'>
                                    <img src={pokemonCard[0].sprites.other['official-artwork'].front_default} alt="#"/>
                                </div>
                                <div className="pokemon_card_all_info">
                                    <div className='characteristics'>
                                        <BasicStats pokemonCard={pokemonCard[0]}/>
                                    </div>
                                    <div className="types">
                                        <Types pokemonCard={pokemonCard[0]}/>
                                    </div>
                                    <div className="abilities">
                                        <Abilities pokemonCard={pokemonCard[0]}/>
                                    </div>
                                    <div className="stats">
                                        <Stats pokemonCard={pokemonCard[0]}/>
                                    </div>
                                </div>
                        </div>
                        <button className='add_favorite' onClick={handlerAddFavorite}><span>Favorite</span></button>
                    </div>
            : 
            'Loading...'
            }
        </div>
    )
}

export default PokemonCard