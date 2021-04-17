import React, { useEffect, useRef, useState } from 'react'
import PokedexInfoCard from './PokedexInfoCard'


const Pokedex = () => {
    const [pokemonsFetch, setPokemonsFetch] = useState([])
    const [currentOffset, setCurrrentOffset] = useState(0)
    const [pokemon, setPokemon] = useState([])
    const [fetching, setFetching] = useState(true)
    const pokedexContainer = useRef()
    
    useEffect(() => {
        if(fetching){
            fetch(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${currentOffset}.`)
            .then(response => response.json())
            .then((result) => setPokemonsFetch(pokemonsFetch.concat(result.results)))
            .finally(setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        if(pokemonsFetch.length > 0){
            pokemonsFetch.forEach((item) => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${item.name}`)
                .then(response => response.json())
                .then(result => setPokemon(prev => [...prev, result]))
            })
            setPokemonsFetch([])
        }
    }, [pokemonsFetch])

    useEffect(() => {
        pokedexContainer.current.addEventListener('scroll', scrollHandler)
    }, [])

    const scrollHandler = (event) => {
        if(event.target.scrollHeight - (event.target.scrollTop + event.target.offsetHeight ) < 1){
            setCurrrentOffset(prev => prev + 20)
            setFetching(true)
        }
    }

    return(
            <div className='pokedex_container' ref={pokedexContainer}>
                {
                    pokemon.map((item, i) => {
                        return(

                                <PokedexInfoCard item={item} key={i}/>
                        )
                    })
                }
            </div>
    )
}

export default Pokedex