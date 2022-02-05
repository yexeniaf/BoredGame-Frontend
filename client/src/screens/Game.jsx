import{ useState, useEffect } from 'react';
import Counter from '../components/Counter';
import Combat from '../components/Dice/Combat';
import RollDice from '../components/Dice/RollDice';
import PlayerCard from '../components/PlayerCard';
import PlayerNumSelect from '../components/PlayerNumSelect';

export default function Game() {
  const [troopNum1, setTroopNum1] = useState(8);
  const [troopNum2, setTroopNum2] = useState(6);


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
          <Combat 
          troopNum1={troopNum1} 
          troopNum2={troopNum2}
          setTroopNum1 ={setTroopNum1}
          setTroopNum2={setTroopNum2}
          />
        </div>
        <div className='absolute bg-red-800 h-screen right-0'>
          <PlayerCard num={1} num2={25}/>
        </div>
          <PlayerNumSelect/>
    </div>
  );
}
