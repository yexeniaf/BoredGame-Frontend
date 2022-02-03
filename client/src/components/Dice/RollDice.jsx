import { useEffect, useState } from "react";

export default function RollDice(props) {
    const [die, setDie] = useState(1);
    const [die2, setDie2] = useState(1);
    const [die3, setDie3] = useState(1);
    const [toggle, setToggle] = useState(false);

    const roll = () => {
        setToggle((prevToggle)=> !prevToggle)
    }

    useEffect(() => {
        setDie(Math.floor(Math.random()*6 + 1));
        setDie2(Math.floor(Math.random()*6 + 1));
        setDie3(Math.floor(Math.random()*6 + 1))
    }, [toggle])
    console.log(die);
    

  return (
    <div className="m-5">
        <button onClick={roll}>Roll Dice</button>
        <div>{die}</div>
        <div>{die2}</div>
        <div>{die3}</div>
    </div>
    );
}
