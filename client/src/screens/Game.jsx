import React from 'react';
import Counter from '../components/Counter';
import RollDice from '../components/Dice/RollDice';

export default function Game() {
  return (
    <div className="flex flex-col items-center">
        <img className='w-screen' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Risk_game_board.svg/600px-Risk_game_board.svg.png" alt="risk" />
        <div className="counters">
          <div>
            <h2>Player 1 </h2>
            <Counter />
          </div>
          <div>
            <h2>Player 2 </h2>
            <Counter />
          </div>
        </div>
        <div className='flex p-5'>
          <RollDice/>
          <RollDice/>
        </div>
    </div>
  );
}
