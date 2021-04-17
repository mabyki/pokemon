import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Search = () => {
    const [allPokemon, setAllPokemons] = useState([])
    const [searchInput, setSearchInput] = useState([])
    const [searchResult, setSearchResult] = useState([])
    const history = useHistory()
    useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon/?limit=1118.')
            .then(response => response.json())
            .then((result) => setAllPokemons(result.results))
    }, [])

    useEffect(() => {
        if(allPokemon.length > 0 && searchInput !== ''){
            let pokemonResult = allPokemon.filter((item) => {
                return item.name.toLowerCase().includes(searchInput.toLowerCase())
            })
            setSearchResult(pokemonResult)
        }
    }, [searchInput])
    
    const searchPokemon = (event) => {
        setSearchInput(event.target.value)
    }

    const handlerClick = (item) => {
        history.push(`/pokemon/${item.name}`, {item})
    }

    return(
        <div className="search_container">
            <input className='input_search' type="text" onChange={(event) => {searchPokemon(event)}} placeholder='Enter pokemon name'/>
                <div className="search_results">
                    {
                    searchResult.length > 0 ? searchResult.map((item, i) => {
                        return(
                                <div onClick={() => {handlerClick(item)}} key={i}>{item.name}</div>
                        ) 
                        }) : ''
                    }
                </div>
        </div>
    )
}

export default Search