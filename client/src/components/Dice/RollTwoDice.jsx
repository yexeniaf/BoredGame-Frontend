import { useEffect, useState, useRef } from "react";
import DieRoll from "./DieRoll.js";

export default function RollTwoDice() {
    const [die, setDie] = useState('');
    const [die2, setDie2] = useState('');
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
            setDie2(DieRoll())
          }
    }, [toggle])
    

  return (
    <div className="flex flex-col items-center">
        <button className="w-16 text-xs font-bold bg-amber-400 border-1 border-black rounded-sm m-2" onClick={roll}>Roll Two Dice</button>
        <div className="bg-white border-2 border-solid border-black w-8 h-8 rounded-md">{die}</div>
        <div className="bg-white border-2 border-solid border-black w-8 h-8 rounded-md">{die2}</div>
    </div>
    );
}