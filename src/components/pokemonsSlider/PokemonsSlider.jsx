import React, { useEffect, useRef, useState } from 'react'
import PokemonsSliderCards from './PokemonsSliderCards'


const PokemonsSlider = () => {
    const ul = useRef()
    const [li, setLi] = useState()
    const [pokemonsFetch, setPokemonsFetch] = useState([])
    const [randomPoke, setRandomPoke] = useState([])
    const [onLoad, setOnLoad] = useState(false)
    const [random, setRandom] = useState(Math.round(Math.random() * 1118))

    useEffect(() => { 
        async function fetchData() {
            let response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1118`)
            let result = await response.json()
            setPokemonsFetch(prev => prev.concat(result.results))
        }
        fetchData()
    },[])

    useEffect(() => {
        if(pokemonsFetch.length > 0){
        for(let i = random; i < random + 10; i++){
            setRandomPoke(prev => [...prev, pokemonsFetch[i]])
        }
    }
    },[pokemonsFetch, random])

    useEffect(() => {
        if(onLoad){
            setLi(ul.current.firstChild.nextSibling.nextSibling)
        }
    },[onLoad])

    useEffect(() => {
        if(onLoad){
        li.classList.add('active')
        li.previousSibling.classList.add('prev')
        li.nextSibling.classList.add('next')
        }
    },[li])

    const handleClick = (direction) => {
        if(direction === 'next' && li.nextSibling.nextSibling !== null){
            li.nextSibling.classList.add('active')
            li.classList.remove('active')
            li.previousSibling.classList.remove('prev')
            li.nextSibling.classList.remove('next')
            setLi(li.nextSibling)
        }else if(direction === 'prev' && li.previousSibling.previousSibling !== null){
            li.previousSibling.classList.add('active')
            li.classList.remove('active')
            li.classList.add('next')
            li.previousSibling.classList.remove('prev')
            li.previousSibling.previousSibling.classList.add('prev')
            li.nextSibling.classList.remove('next')
            setLi(li.previousSibling)
        }
    }

    const handlerClickRandom = () => {
        setOnLoad(false)
        setRandom(Math.round(Math.random() * 1118))
        setRandomPoke([])
    }

    return(
        <div className='main_container'>
            <div className="pokemon_slider_container">
                <button className="random" onClick={handlerClickRandom}>Random pokemon</button>
                <ul className="pokemon_slider_list" ref={ul}>
                    {
                        randomPoke.length > 0 ?
                            randomPoke.map((item, i) => {
                                return(
                                    <li className="pokemon_slider_item" key={i}>
                                        <PokemonsSliderCards name={item.name} setOnLoad={setOnLoad} />
                                    </li>
                                )
                            }) :
                            'Loading...'
                    }   
                </ul>
                <button className='slider_btn_prev' onClick={() => handleClick('prev')}></button>
                <button className='slider_btn_next' onClick={() => handleClick('next')}></button>
            </div>
        </div>
    )
}

export default PokemonsSlider