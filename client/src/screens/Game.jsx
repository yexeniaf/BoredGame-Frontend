import React, { useEffect, useState } from 'react';
import Counter from '../components/Counter';
import Combat from '../components/Dice/Combat';
import RollDice from '../components/Dice/RollDice';
import RollOneDie from '../components/Dice/RollOneDie';
import RollTwoDice from '../components/Dice/RollTwoDice';
import PlayerCard from '../components/PlayerCard';
import PlayerNumSelect from '../components/PlayerNumSelect';
import Setup from '../components/Setup';
import Turn from '../scripts/Turn.js';

export default function Game() {
  // Toggle to control display of player number selector and main game.
  const [toggle, setToggle] = useState(false);
  const [troopNum1, setTroopNum1] = useState(8);
  const [troopNum2, setTroopNum2] = useState(6);

  // Number of players:
  const [playerNum, setPlayerNum] = useState(2);

  // An array with player card elements eqaul to the number of players:
  const [players, setPlayers] = useState([]);

  // The starting troop allottment per player:
  const [startingTroops, setStartingTroops] = useState(0);

  const [currentTurn, setCurrentTurn] = useState(1);
  
  // When the toggle is fired, make an array of playyers.
  useEffect(() => {
    makePlayerArr();
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
<<<<<<< HEAD
          <img
            className='w-screen'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Risk_game_board.svg/600px-Risk_game_board.svg.png"
            alt="Risk board game map."
          />
=======
          <img className='w-3/4 left-0 absolute' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Risk_game_board.svg/600px-Risk_game_board.svg.png" alt="risk" />
>>>>>>> d9b3606f30bc25e123aecf734ae13b3deafcb279
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



