import axios from "axios";
import { useState, useEffect } from "react";

export default function SavedGames() {
  const [saved, setSaved] = useState([])

  // const dummyData = [
  //   {
  //     playerNum: '3',
  //     territories: 'territories',
  //     turn: '3'
  //   },
  //   {
  //     playerNum: '4',
  //     territories: 'territories',
  //     turn: '2'
  //   },
  //   {
  //     playerNum: '5',
  //     territories:'territories' ,
  //     turn: '1' 
  //   }
  // ]

  useEffect(() => {
    const fetchSavedGame = async() => {
      const res = await axios.get(`http://localhost:4000/gamestate`)
      setSaved(res.data.data)
      console.log(res.data.data)
    }
    fetchSavedGame()
  }, [])

  return (
    <div className='bg-cover bg-[url(https://img.wallpapic.com/i3792-323-47/medium/dice-game-games-casino-board-wallpaper.jpg)]'>
      <h1 className="saved">Saved</h1>
    <div class="cards items-center h-screen">
      {saved.map((e, i)=>{
        return <div 
        key={i} 
        className="bg-orange-400 text-white font-bold rounded-lg border shadow-lg p-10 m-2 hover:scale-125"
        >
        Saved Game #{i + 1}
        <br />
        Number of Players: {e.playerNum}
        <br />
        Current Turn: {e.turn}
         </div>
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