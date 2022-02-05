import React, { useState } from 'react';
import Counter from '../components/Counter';
import Combat from '../components/Dice/Combat';
import PlayerCard from '../components/PlayerCard';
import PlayerNumSelect from '../components/PlayerNumSelect';
import Setup from '../components/Setup';
import Table from '../components/Table';

export default function Game() {
  const [toggle, setToggle] = useState(false);
  const [playerNum, setPlayerNum] = useState({ playerNum: 2 });
  const [troopNum1, setTroopNum1] = useState(8);
  const [troopNum2, setTroopNum2] = useState(6);

  if (toggle) {
    console.log("playerNum:", playerNum);
    return (
      <div className="flex flex-col items-center">
        <div className='absolute bg-red-800 h-screen left-0'>
              <Table />
            </div>
          <img className='w-screen' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Risk_game_board.svg/600px-Risk_game_board.svg.png" alt="risk" />
          <div className="counters">
            
          </div>
          <div className='flex p-5'>
            <Combat 
            troopNum1={troopNum1} 
            troopNum2={troopNum2}
            setTroopNum1 ={setTroopNum1}
            setTroopNum2={setTroopNum2}
            />
            <Setup/>
          </div>
          <div className='absolute bg-red-800 h-screen right-0'>
            <PlayerCard num={1} num2={25}/>
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



