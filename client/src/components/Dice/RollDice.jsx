import { useEffect, useState, useRef } from "react";
import DieRoll from "./DieRoll.js";

export default function RollDice() {
    const [die, setDie] = useState(1);
    const [die2, setDie2] = useState(1);
    const [die3, setDie3] = useState(1);
    const [toggle, setToggle] = useState(false);
    const initialRender = useRef(true);

    const roll = () => {
        setToggle((prevToggle)=> !prevToggle)
    }

    
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
          } else {
            setDie(DieRoll());
            setDie2(DieRoll());
            setDie3(DieRoll())
          }
    }, [toggle])
    

  return (
    <div className="m-5 flex flex-col items-center">
        <button onClick={roll}>Roll Dice</button>
        <div className="border-2 border-solid border-black w-8 h-8 rounded-md">{die}</div>
        <div className="border-2 border-solid border-black w-8 h-8 rounded-md">{die2}</div>
        <div className="border-2 border-solid border-black w-8 h-8 rounded-md">{die3}</div>
    </div>
    );
}
