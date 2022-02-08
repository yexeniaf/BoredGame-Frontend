import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SavedGames() {
  const [saved, setSaved] = useState([]);
  const id = localStorage.getItem('CurrentUserId');
  const navigate = useNavigate();

  const loadGame = async(id) => {
    const res = await axios.get(`https://boredgame-backend.herokuapp.com/gamestate/${id}`);
    const loadData = res.data.data.Game;
    sessionStorage.setItem('playerNum', loadData.playerNum);
    sessionStorage.setItem('turn', loadData.turn);
    navigate("/load_game")
  }

  const handleClick = async(id)=>{
    await axios.delete(`https://boredgame-backend.herokuapp.com/gamestate/${id}`);
    window.location.reload();
  }

  useEffect(() => {
    const fetchSavedGame = async() => {
      const res = await axios.get(`https://boredgame-backend.herokuapp.com/games/${id}`)
      setSaved(res.data.data.games)
    }
    fetchSavedGame();
  }, [])

  return (
    <div className='bg-cover bg-[url(https://img.wallpapic.com/i3792-323-47/medium/dice-game-games-casino-board-wallpaper.jpg)]'>
      <h1 className="saved">Saved</h1>
    <div class="cards items-center h-screen">
      {saved.map((e, i)=>{
        return <div 
        key={i} 
        className="bg-orange-400 text-white font-bold rounded-lg border shadow-lg p-10 m-2 hover:scale-125 transition flex flex-col"
        >
        <button onClick={()=> loadGame(e._id)}>
          <div className="text-red-900">Load Game</div>
          Saved Game #{i + 1}
          <br />
          Number of Players: {e.playerNum}
          <br />
          Current Turn: {e.turn}
        </button>
        <button className="text-blue-600" onClick={() => handleClick(e._id)}>Delete File</button>
         </div>
      })}
    </div>
    </div>
    );
}
