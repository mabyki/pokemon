import React, { useState } from 'react'

const Favorite = () => {

    const [favoriteLibrary, setFavoriteLibrary] = useState(JSON.parse(localStorage.getItem('favorite')) || [])

    const handlerCklick = (item) => {
        let newFavoriteLibrary = favoriteLibrary.filter((el) => {
            return el.id !== item.id
        })
        setFavoriteLibrary([...newFavoriteLibrary])
        localStorage.setItem('favorite', JSON.stringify(newFavoriteLibrary))
    }

    return(
        <>
            <div className="favorite_container">
            {favoriteLibrary.length > 0 ?
                favoriteLibrary.map((item, i) => {
                    return(
                        <div className='favorite_card_container' key={i}>
                            <img src={item.sprites.other['official-artwork'].front_default} alt={item.name}/>
                            <div className="favorite_card_info">
                                <div className='favorite_card_info_text'>
                                <span className='favorite_id_pokemon'>#{item.id}</span>
                                <span className='favorite_name'>{item.name}</span>
                                </div>
                                <div className='favorite_type'>
                                {
                                    item.types.map((item, i) => {
                                        return(
                                            <div key={i}>{item.type.name}</div>
                                        )
                                    })
                                }
                                </div>
                            </div>
                            <button className='favorite_btn_del' onClick={() => {handlerCklick(item)}}><span>Delete</span></button>
                        </div>
                    )
                }) :
                'Empty'
            }
            </div>
        </>
    )
}

export default Favorite