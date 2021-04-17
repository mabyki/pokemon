import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Favorite from './Favorite'
import Pokedex from './pokedex/Pokedex'
import Search from './Search'
import PokemonsSlider from './pokemonsSlider/PokemonsSlider'
import PokemonCard from './pokemonCard/PokemonCard'
import Welcome from './Welcome'

const Main = () => {
    return(
            <div className="main">
                <Switch>
                        <Route exact path='/'>
                            <Welcome />
                        </Route>
                        <Route exact path='/main'>
                            <PokemonsSlider />
                        </Route>

                        <Route exact path='/pokedex'>
                            <Pokedex />
                        </Route>

                        <Route exact path='/favorite/'>
                            <Favorite />
                        </Route>
                        <Route exact path='/search'>
                            <Search />
                        </Route>
                        <Route exact path='/pokemon/:name'>
                            <PokemonCard />
                        </Route>
                </Switch>
            </div>
    )
}

export default Main