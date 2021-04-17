import React, { useState } from 'react'


function Stats({pokemonCard}) {
    const [onLoad, setOnload] = useState(false) 

    const handlerClick = () => {
        setOnload(!onLoad)
    }

  return (
      <>
        <div className='card_info_name' onClick={handlerClick}>Stats</div>
        {   onLoad ?
            pokemonCard.stats.map((item, i) => {
                return(
                        <span className='stat_name' key={i}>
                            {item.stat.name}: <span className='stat_value'>{item.base_stat}</span>
                        </span>
                )
            }) : ''
        }
      </>
  );
}

export default Stats;