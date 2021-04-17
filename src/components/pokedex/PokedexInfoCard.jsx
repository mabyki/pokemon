import React from 'react'
import { useHistory } from 'react-router-dom'

const PokedexInfoCard = ({item}) => {
    const history = useHistory()

    const handlerClick = () => {
        history.push(`/pokemon/${item.name}`, {item})
    }

    return(
        <div className='pokedex_card_container' onClick={handlerClick}>
            <img src={item.sprites.other['official-artwork'].front_default} alt={item.name}/>
            <div className="pokedex_card_info">
                <span className='id_pokemon'>#{item.id}</span>
                <span className='name'>{item.name}</span>
                <div className='type'>
                    {
                    item.types.map((item, i) => {
                        return(
                            <div key={i}>{item.type.name}</div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default PokedexInfoCard