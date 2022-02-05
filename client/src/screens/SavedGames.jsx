import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import api from "../services/apiConfig"; 

export default function SavedGames() {
  const [saved, setSaved] = useState([])
  let { id } = useParams();

  // const dummyData = [
  //   {
  //     playerNum: props.playerNum,
  //     territories: dummy_territory,
  //     turn: props.turn
  //   },
  //   {
  //     playerNum: props.playerNum,
  //     territories: dummy_territory,
  //     turn: props.turn
  //   },
  //   {
  //     playerNum: props.playerNum,
  //     territories: dummy_territory,
  //     turn: props.turn
  //   }
  // ]

  // useEffect(() => {
  //   const fetchSavedGame = async() => {
  //     const res = await api.get(id)
  //     setSaved(res.data.saved)
  //     console.log(res)
  //   }
  //   fetchSavedGame()
  // }, [id])

  return (
    <div>
      <h1 className="saved">Saved</h1>
    <div class="cards items-center h-screen">
      <button class="bg-orange-400 text-white font-bold rounded-lg border shadow-lg p-10">
        Saved Game #1
      </button>
      <button class="bg-orange-400 text-white font-bold rounded-lg border shadow-lg p-10">
        Saved Game #2
      </button>
      <button class="bg-orange-400 text-white font-bold rounded-lg border shadow-lg p-10">
        Saved Game #3
      </button>
    </div>
    </div>
    );
}
