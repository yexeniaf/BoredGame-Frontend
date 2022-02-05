import React, { useState } from 'react';

export default function PlayerCard(props) {
    const {num, troops} = props

  return (
    <div className='bg-orange-400 text-amber-800 w-60 flex p-2 m-3 flex-col items-start'>
        <h2 className='text-2xl'>Player {num}:</h2>
        <div>Troops to Deploy: {troops}</div>
    </div>
  );
}
