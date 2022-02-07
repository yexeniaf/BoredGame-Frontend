import { useState } from 'react';

export default function TerrOwnerSlider(props) {
    let startingInput = props.owner;

    // Input for owner slider:
    const [input, setInput] = useState(startingInput);

    const handleNumberInput = (e) => {
        const { valueAsNumber } = e.target;
        setInput(valueAsNumber);
    };

    return (
        <div>
            {input}
            <input
                id="terrOwner"
                type="range"
                name="range"
                value={input}
                min="0"
                max={props.playerNum}
                step="1"
                onChange={handleNumberInput}
                className="ml-2 appearance-none h-1 bg-black rounded-lg outline-none slider"
            />
        </div>
    )
}
