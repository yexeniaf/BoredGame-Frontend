import { useState } from 'react';

export default function TerritoryTroopCounter(props) {
    // Input for owner slider:
    const [input, setInput] = useState(props.troops);

    const handleNumberInput = (e) => {
        const { valueAsNumber } = e.target;
        setInput(valueAsNumber);
    };

    return (
        <div>
            <input
                id="troops"
                type="number"
                name="troops"
                value = {input}
                min="0"
                max="180"
                step="1"
                onChange={handleNumberInput}
            />
        </div>
    )
}
