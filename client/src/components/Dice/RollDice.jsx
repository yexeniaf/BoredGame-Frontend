import { useEffect, useState } from "react";

export default function RollDice() {
    const [die, setDie] = useState(1);
    const [toggle, setToggle] = useState(false);

    const roll = ()=>{
        setToggle((prevToggle)=> !prevToggle)
    }

    useEffect(() => {
        setDie(Math.floor(Math.random()*6 + 1))
        console.log(die);
    }, [toggle])


  return (
    <div>
        <button onClick={roll}>Roll Die</button>
        <div>{die}</div>
    </div>
    );
}
