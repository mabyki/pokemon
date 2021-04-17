import React, { useState } from 'react'

function Types({pokemonCard}) {
    const [onLoad, setOnload] = useState(false) 

    const handlerClick = () => {
        setOnload(!onLoad)
    }

  return (
      <>
        <div className='card_info_name' onClick={handlerClick}>Types</div>
        {   onLoad ?
            pokemonCard.types.map((item, i) => {
                return(
                    <div key={i}>
                        {item.type.name}
                    </div>
                )
            }) : ''
        }
      </>
  );
}

export default Types;