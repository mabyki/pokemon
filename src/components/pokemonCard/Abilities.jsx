import React, { useState } from 'react'


function Abilities({pokemonCard}) {
    const [onLoad, setOnload] = useState(false) 

    const handlerClick = () => {
        setOnload(!onLoad)
    }

  return (
      <>
        <div className='card_info_name' onClick={handlerClick}>Abilities</div>
        {   onLoad ?
            pokemonCard.abilities.map((item, index) => {
                return(
                    <span className='ability_name' key={index}>
                        {item.ability.name}
                    </span>
                )
            }) : ''
        }
      </>
  );
}

export default Abilities;