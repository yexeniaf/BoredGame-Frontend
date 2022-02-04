import React from 'react';
import Combat from '../components/Dice/Combat';
import RollDice from '../components/Dice/RollDice';
import Setup from '../components/Setup';

export default function Game() {
  return (
    <div className="flex flex-col items-center">
        <img className='w-screen' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Risk_game_board.svg/600px-Risk_game_board.svg.png" alt="risk" />
        <div className='flex p-5'>
          <RollDice/>
          <Combat troopNum1={3} troopNum2={2}/>
          <Setup/>
        </div>
    </div>
  );
}
