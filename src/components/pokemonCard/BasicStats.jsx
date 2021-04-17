import React, { useState } from 'react'


function BasicStats({pokemonCard}) {
    const [onLoad, setOnload] = useState(false) 

    const handlerClick = () => {
        setOnload(!onLoad)
    }

  return (
      <>
        <div className='card_info_name' onClick={handlerClick}>Characteristics</div>
        {   onLoad ?
            <>
            <span className='stat_name'>
                Height:
                <span className='basic'>
                    {pokemonCard.height / 10} m
                </span>
            </span>
            <span className='stat_name'>
                Weight:
                <span className='basic'>
                    {pokemonCard.weight / 10} kg
                </span>
            </span>
            <span className='stat_name'>
                Base Experience:
                <span className='basic'>
                    {pokemonCard.base_experience}
                </span>
            </span>
            </> : ''
        }
      </>
  );
}

export default BasicStats;