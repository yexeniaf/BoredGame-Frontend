import React, { useState } from 'react';
import Counter from './Counter';

export default function PlayerCard(props) {
    const {num, troops} = props

  return (
    <div className='bg-amber-400 text-amber-800 w-60 flex p-2 m-3 flex-col items-start'>
        <h2 className='text-2xl font-serif'>Player {num}:</h2>
        <div className='font-serif inline-flex'>Troops to Deploy: <Counter troops={troops}/> </div>
    </div>
  );
}
