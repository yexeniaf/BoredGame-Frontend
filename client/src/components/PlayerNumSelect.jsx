import { useState } from "react";

export default function PlayerNumSelect(props) {
    // Sets default input. Useful if more fields are added later.
    const default_input = {
        playerNum: 2
    }

    const [input, setInput] = useState(default_input);

    // Logic to set starting troops. This variable is sent to the game state.
    let startingTroopAllotment;
    if (input.playerNum === 2) {
        console.log("playerNum:", input.playerNum);
        startingTroopAllotment = 40;
        } else if (input.playerNum === 3) {
            console.log("playerNum:", input.playerNum);
            startingTroopAllotment = 35;
        } else if (input.playerNum === 4) {
            console.log("playerNum:", input.playerNum);
            startingTroopAllotment = 30;
        } else if (input.playerNum === 5) {
            console.log("playerNum:", input.playerNum);
            startingTroopAllotment = 25;
        } else if (input.playerNum === 6) {
            console.log("playerNum:", input.playerNum);
            startingTroopAllotment = 20;
        } else {
            console.log("Players must be 2-6.")
        };

    const handleNumberInput = (e) => {
        const { id, valueAsNumber } = e.target;
        setInput((prevInput) => ({
            ...prevInput,
            [id]: valueAsNumber,
        }));
    };

    // On submit, set the player numer, starting troops, and toggle to the main game.
    const handleSubmit = (e) => {
        e.preventDefault();
        props.setPlayerNum(input.playerNum);
        props.setStartingTroops(startingTroopAllotment)
        props.setToggle(true);
    };

    // Form with slider and button.
    return (    
        <form
            className="bg-orange-400 p-10 text-white"
            id="playerNumForm"
            onSubmit={handleSubmit}
        >
            <label
                htmlFor="playerNum"
            >
                Select Number of Players: 
            </label>
            <span
                id="playerNumOutput"
            >
                {input.playerNum}
            </span>
            <input
                id="playerNum"
                type="range"
                name="range"
                value={input.playerNum}
                min="2"
                max="6"
                step="1"
                onChange={handleNumberInput}
                className="ml-2 appearance-none h-1 bg-black rounded-lg outline-none slider"
            />
            <button
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent mt-6
                    text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 
                    md:py-4 md:text-lg md:px-10"
            >
                Start
            </button>
        </form>
    );
};
