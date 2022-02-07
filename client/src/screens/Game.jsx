import { useEffect, useState, useRef } from 'react';
import axios from 'axios';

import defaultTerritories from "../json/new-territory-data.json"
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
  // This opens or collapses the player stats board.
  const [show, setShow] = useState(true)

  // Toggle to control display of player number selector and main game.
  const [toggle, setToggle] = useState(false);

  const initialRender = useRef(true);

  // Number of players:
  const [playerNum, setPlayerNum] = useState(2);

  // Sets initial state for territories. 
  const [territories, setTerritories] = useState(defaultTerritories)

  const [currentTurn, setCurrentTurn] = useState(1);

  // An array with player card elements eqaul to the number of players:
  const [players, setPlayers] = useState([]);

  // The starting troop allottment per player:
  const [startingTroops, setStartingTroops] = useState(0);

    // Changes the text in button to show close or open.
    let expandCollapseLabel;
    if (show) {
        expandCollapseLabel = "Close";
    } else if (!show) {
        expandCollapseLabel = "Open";
    };
  
  // When the toggle is fired, make an array of playyers.
  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      makePlayerArr();
    }
  }, [toggle])
  
  const saveGame = async (e) => {
    e.preventDefault();
    try {
      let gameState = {
          playerNum: playerNum,
          territories: territories,
          turn: currentTurn
      }
      const res = await axios.post(`https://boredgame-backend.herokuapp.com/gamestate`, gameState)
      console.log(res);
      alert("Saved!");
  
    } catch (error) {
        alert("Error Saving Game. Contact project owner.")
        console.error("Error Saving Game. Contact project owner.")
    };
  };

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
        <img className='w-1/2 absolute right-1/3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Risk_game_board.svg/600px-Risk_game_board.svg.png" alt="risk" />
        <div className='absolute bg-red-900 border-2 border-x-amber-500 left-0'>
              <Table
                playerNum = {playerNum}
                territories = {territories}
                setTerritories = {setTerritories}
              />
            </div>
          <div className="counters">
            
          </div>
          <div className='fixed bottom-14 right-72 flex p-5 bg-red-900 border-2 border-x-amber-500 rounded-xl'>
            <RollDice/>
            <RollTwoDice/>
            <RollOneDie/>
            <Setup/>
          </div>
          <div className='stats absolute bg-red-900 right-0 border-2 border-x-amber-500'>
            <h3 className="text-lg font-bold text-yellow-50">Player Stats</h3>
            <button
                className="w-16 text-sm font-bold bg-amber-400 border-1 border-black rounded-sm m-2"
                onClick={()=> setShow(!show)}
            >
                    {expandCollapseLabel}
            </button>
          { show? 
            <div>
              {players}
              <h4 className='text-lg font-bold text-yellow-50'>It is player {currentTurn}'s turn!</h4>
              <button
                className="w-full flex items-center justify-center px-8 py-3 border
                border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                md:py-4 md:text-lg md:px-10"
                onClick={handleTurnPass}
              >
                Next Turn
              </button>
              <br/>
              {/* Currently the save button doesn't actually pass the territory information. That will need to be saved in state and passed down. */}
              <SaveGameButton
                playerNum = {playerNum}
                territories = {territories}
                turn = {currentTurn}
                saveGame = {saveGame}
              />
            </div>
            :null}
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
