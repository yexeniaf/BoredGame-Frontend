import React from 'react';
import RollDice from '../components/Dice/RollDice';

export default function Game() {
  return (
    <div className="flex flex-col items-center">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Risk_game_board.svg/600px-Risk_game_board.svg.png" alt="risk" />
        <div className='flex p-5'>
          <RollDice/>
          <RollDice/>
        </div>
    </div>
  );
}
