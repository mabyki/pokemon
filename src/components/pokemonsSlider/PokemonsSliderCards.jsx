import React, { useEffect, useState } from 'react'

const PokemonsSliderCards = ({name, setOnLoad}) => {
    const [pokemonInfo, setPokemonInfo] = useState([])
    const [fetching, setFetching] = useState(false)

    useEffect(() => {
            fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(responce => responce.json())
            .then(result => setPokemonInfo(result))
            .then(() => setFetching(true))
    }, [name])

    useEffect(() => {
        setOnLoad(true)
    },[])

    return(
        <>  
            {fetching
            ? 
            <>
            <div className='pokemon_slider_card_container'>
                <div className="pokemon_card_slider_image">
                    <img src={pokemonInfo.sprites.other['official-artwork'].front_default} alt="image not found"></img>
                </div>
                <div className='pokemon_card_slider_info'>
                    <span className='pokemon_card_slider_info_name'>{pokemonInfo.name}</span>
                    <div className="pokemon_card_slider_types">
                            Types:
                            {
                            pokemonInfo.types.map((item, index) => {
                                return(
                                        <span key={index}>
                                            {item.type.name}
                                        </span>
                                )
                            })
                            }
                    </div>
                </div>
            </div>    
            </>
            : 
            'Loading...'
            }
        </>
    )
}

export default PokemonsSliderCards