import React, { useState } from 'react';
import Counter from '../components/Counter';
import Combat from '../components/Dice/Combat';
import RollDice from '../components/Dice/RollDice';
import RollOneDie from '../components/Dice/RollOneDie';
import RollTwoDice from '../components/Dice/RollTwoDice';
import PlayerCard from '../components/PlayerCard';
import PlayerNumSelect from '../components/PlayerNumSelect';
import Setup from '../components/Setup';

export default function Game() {
  const [toggle, setToggle] = useState(false);
  const [playerNum, setPlayerNum] = useState({ playerNum: 2 });
  const [troopNum1, setTroopNum1] = useState(8);
  const [troopNum2, setTroopNum2] = useState(6);

  if (toggle) {
    // console.log("playerNum:", playerNum);
    return (
      <div className="flex flex-col items-center">
          <img className='w-3/4 left-0 absolute' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Risk_game_board.svg/600px-Risk_game_board.svg.png" alt="risk" />
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
          {/* <div className='flex p-5'>
            <Combat 
            troopNum1={troopNum1} 
            troopNum2={troopNum2}
            setTroopNum1 ={setTroopNum1}
            setTroopNum2={setTroopNum2}
            />
          </div> */}
          <div className='fixed bottom-0 right-72 flex p-5 bg-red-900 border-2 border-x-amber-500 rounded-xl'>
            <RollDice/>
            <RollTwoDice/>
            <RollOneDie/>
            <Setup/>
          </div>
          <div className='absolute bg-red-900 h-full right-0 border-2 border-x-amber-500'>
            <PlayerCard num={playerNum.playerNum} num2={25}/>
          </div>
      </div>
    );  
  } else {
    return (
      <PlayerNumSelect
        setToggle = {setToggle}
        setPlayerNum = {setPlayerNum}
      />
    )
  }
}



