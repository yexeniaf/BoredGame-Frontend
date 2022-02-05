import { useState } from "react";
import axios from 'axios';

const dummy_territory = {
    territory: "Alaska",
    cardOwner: 2,
    troops: 3,
    territoryOwner: 1
}

const default_gameState = {
    playerNum: 2,
    territories: dummy_territory,
    turn: 1
}

export default function SaveGameButton(props) {
    const [gameState, setGameState] = useState(default_gameState);

    const saveGame = async (e) => {
        e.preventDefault();
        try {
            setGameState({
                playerNum: props.playerNum,
                territories: dummy_territory,
                turn: props.turn
            })
            const res = await axios.post(`https://boredgame-backend.herokuapp.com/gamestate`, gameState)
            console.log(res);
            // alert("Saved!");

        } catch (error) {
            alert("Error Saving Game. Contact project owner.")
            console.error("Error Saving Game. Contact project owner.")
        };
    };

    return (
        <button
            className="w-full flex items-center justify-center px-8 py-3
            border border-transparent text-base font-medium rounded-md 
            text-indigo-700 bg-indigo-100 hover:bg-indigo-200 
            md:py-4 md:text-lg md:px-10"
            onClick={saveGame}
        >
            Save Game
        </button>
    )
};
