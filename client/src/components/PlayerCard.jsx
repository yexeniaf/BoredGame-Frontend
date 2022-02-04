import React, { useState } from 'react';

export default function PlayerCard(props) {
    const {num, num2} = props

  return (
    <div className='bg-orange-400 text-amber-800 w-60 flex p-2 m-3 flex-col items-start'>
        <h1 className='text-2xl'>Player {num}</h1>
        <div>Troops to Deploy: {num2}</div>
    </div>
  );
}
