import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import api from "../services/apiConfig"; 

export default function SavedGames() {
  const [saved, setSaved] = useState([])
  let { id } = useParams();

  const dummyData = [
    {
      playerNum: '3',
      territories: 'territories',
      turn: '3'
    },
    {
      playerNum: '4',
      territories: 'territories',
      turn: '2'
    },
    {
      playerNum: '5',
      territories:'territories' ,
      turn: '1' 
    }
  ]

  useEffect(() => {
    const fetchSavedGame = async() => {
      const res = await api.get(id)
      setSaved(res.data.saved)
      console.log(res)
    }
    fetchSavedGame()
  }, [id])

  return (
    <div className='bg-cover bg-[url(https://img.wallpapic.com/i3792-323-47/medium/dice-game-games-casino-board-wallpaper.jpg)]'>
      <h1 className="saved">Saved</h1>
    <div class="cards items-center h-screen">
      {dummyData.map((e, i)=>{
        return <button key={i} className="bg-orange-400 text-white font-bold rounded-lg border shadow-lg p-10">
        Saved Game #{i + 1}
        <br />
        Number of Players: {e.playerNum}
        <br />
        Current Turn: {e.turn}
         </button>
      })}
    </div>
    </div>
    );
}


// <button class="bg-orange-400 text-white font-bold rounded-lg border shadow-lg p-10">
// Saved Game #1
// </button>
// <button class="bg-orange-400 text-white font-bold rounded-lg border shadow-lg p-10">
// Saved Game #2
// </button>
// <button class="bg-orange-400 text-white font-bold rounded-lg border shadow-lg p-10">
// Saved Game #3
// </button>