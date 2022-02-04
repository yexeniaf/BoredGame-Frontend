import React from 'react';
import Counter from '../components/Counter';
import Combat from '../components/Dice/Combat';
import RollDice from '../components/Dice/RollDice';
import PlayerCard from '../components/PlayerCard';
import Setup from '../components/Setup';

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
          <Combat troopNum1={3} troopNum2={2}/>
          <Setup/>
        </div>
        <div className='absolute bg-red-800 h-screen right-0'>
          <PlayerCard num={1} num2={25}/>
        </div>
    </div>
  );
}
