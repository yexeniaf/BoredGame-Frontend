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
        startingTroopAllotment = 40;
        } else if (input.playerNum === 3) {
            startingTroopAllotment = 35;
        } else if (input.playerNum === 4) {
            startingTroopAllotment = 30;
        } else if (input.playerNum === 5) {
            startingTroopAllotment = 25;
        } else if (input.playerNum === 6) {
            startingTroopAllotment = 20;
        } else {
            console.error("Players must be 2-6.")
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
        <div>
            <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-indigo-500 sm:text-4xl"> Objective of the Game:</h1>
            <br/>
            <p className="tracking-tight text-gray-900 sm:text-xl">To conquer the world by occupying all territories on the board. You need to eliminate all your opponents!</p>
            </div>
        <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>  
        <form
            className=" bg-stone-900 p-20 text-white "
            id="playerNumForm"
            onSubmit={handleSubmit}
        >
            <label
                htmlFor="playerNum"
                className="sm:text-xl font-semibold"
            >
                Select Number of Players: 
            </label>
            <span
                className="sm:text-xl font-semibold"
                id="playerNumOutput"
            >
                {input.playerNum}
            </span>
            <br/>
            <input
                id="playerNum"
                type="range"
                name="range"
                value={input.playerNum}
                min="2"
                max="6"
                step="1"
                onChange={handleNumberInput}
                className="ml-2 appearance-none h-1 bg-white rounded-lg outline-none slider"
            />
            <br/>
            <button
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent mt-6
                    text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 
                    md:py-4 md:text-lg md:px-10"
            >
                Start
            </button>
        </form>
        </div>
        </div>
    );
};
