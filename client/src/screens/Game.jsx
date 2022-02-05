import { useEffect, useState, useRef } from 'react';
// import Counter from '../components/Counter';
// import Combat from '../components/Dice/Combat';
import RollDice from '../components/Dice/RollDice';
import RollOneDie from '../components/Dice/RollOneDie';
import RollTwoDice from '../components/Dice/RollTwoDice';
import PlayerCard from '../components/PlayerCard';
import PlayerNumSelect from '../components/PlayerNumSelect';
import SaveGameButton from '../components/SaveGameButton';
import Setup from '../components/Setup';
import Table from '../components/Table';
import Turn from '../scripts/Turn.js';

export default function Game() {
  // Toggle to control display of player number selector and main game.
  const [toggle, setToggle] = useState(false);
  const initialRender = useRef(true);
  // const [troopNum1, setTroopNum1] = useState(8);
  // const [troopNum2, setTroopNum2] = useState(6);

  // Number of players:
  const [playerNum, setPlayerNum] = useState(2);

  // An array with player card elements eqaul to the number of players:
  const [players, setPlayers] = useState([]);

  // The starting troop allottment per player:
  const [startingTroops, setStartingTroops] = useState(0);

  const [currentTurn, setCurrentTurn] = useState(1);
  
  // When the toggle is fired, make an array of playyers.
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      makePlayerArr();
    }
  }, [toggle])

  // Player num is an integer, so we need to push components into an array and return the array in the return statement.
  const makePlayerArr = () => {
    let playerArr = [];
    for (let i = 1; i <= playerNum; i++) {
      playerArr.push(
        <PlayerCard
          key = {i}
          num={i}
          troops={startingTroops}
        />
      );
    }
    setPlayers(playerArr)
  };
  
  const handleTurnPass = () => {
    // Sets the current turn to the output of the turn function.
    setCurrentTurn(Turn(currentTurn, playerNum));
  }


  if (toggle) {
    return (
      <div className="flex flex-col items-center">
        <img className='w-1/2 absolute left-1/3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Risk_game_board.svg/600px-Risk_game_board.svg.png" alt="risk" />
        <div className='absolute bg-red-900 border-2 border-x-amber-500 left-0'>
              <Table />
            </div>
          <div className="counters">
            
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
          <div className='absolute bg-red-900 h-screen right-0 border-2 border-x-amber-500'>
            <h3>Player Stats</h3>
            {players}
            <h4>It is player {currentTurn}'s turn!</h4>
            <button
              className="w-full flex items-center justify-center px-8 py-3 border
              border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
              md:py-4 md:text-lg md:px-10"
              onClick={handleTurnPass}
            >
              Next Turn
            </button>
            {/* Currently the save button doesn't actually pass the territory information. That will need to be saved in state and passed down. */}
            <SaveGameButton
              playerNum = {playerNum}
              territories = {"territories"}
              turn = {currentTurn}
            />
          </div>
      </div>
    );  
  } else {
    return (
      <PlayerNumSelect
        setToggle = {setToggle}
        setPlayerNum = {setPlayerNum}
        setStartingTroops = {setStartingTroops}
        makePlayerArr = {makePlayerArr}
      />
    )
  }
}



