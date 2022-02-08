import { useEffect, useRef, useState } from "react";
import DieRoll from "./DieRoll.js"


export default function Combat(props) {
    const [toggle, setToggle] = useState(false)
    const {troopNum1, troopNum2, setTroopNum1, setTroopNum2} = props
    const initialRender = useRef(true);
    //store the values rolled by both players for comparison
    const [att, setAtt] = useState([]);
    const [def, setDef] = useState([]);
    let life1 = troopNum1;
    let life2 = troopNum2;

    const handleClick = ()=>{
        setToggle((prevToggle)=> !prevToggle)
    }

    useEffect(()=>{
        if (initialRender.current) {
            initialRender.current = false;
          } else {
                 //set up if else statements to determine how many dice should be rolled for each player
       if(troopNum1 > 3 && troopNum2 > 1){
        setAtt([DieRoll(), DieRoll(), DieRoll()]);
        setDef([DieRoll(), DieRoll()])
        }else if(troopNum1 === 3 && troopNum2 > 1){
            setAtt([DieRoll(), DieRoll()]);
            setDef([DieRoll(), DieRoll()])
        }else if(troopNum1 === 2 && troopNum2 > 1){
            setAtt([DieRoll()]);
            setDef([DieRoll(), DieRoll()])
        }else if(troopNum1 > 3 && troopNum2 === 1){
            setAtt([DieRoll(), DieRoll(), DieRoll()]);
            setDef([DieRoll()]);
        }else if(troopNum1 === 3 && troopNum2 === 1){
            setAtt([DieRoll(), DieRoll()]);
            setDef([DieRoll()]);
        }else if(troopNum1 === 2 && troopNum2 === 1){
            setAtt([DieRoll()]);
            setDef([DieRoll()]);
        }
        att.sort((a,b)=> b-a);
        def.sort((a,b)=> b-a);
        }

        if(att.length >= def.length){
            def.map((e, i)=>{
                if(e >= att[i]){
                    setTroopNum1(life1 -= 1);
                }else{
                    setTroopNum2(life2 -= 1);
                }
            })
        }else{
            if(att[0] <= def[0]){
               setTroopNum1(life1 - 1);
            }else{
                setTroopNum2(life2 - 1);
            }
        }
    }, [toggle])
    

    return (
        <div>
            <button onClick={()=> handleClick()}>Fight!</button>
            <div className="bg-gray-400 w-64 grid grid-cols-2 grid-rows-2 justify-items-center">
                <div className="m-2">
                    {att.map((e, i)=>{
                        return(
                            <div className="border-2 border-solid border-black w-8 h-8 rounded-md bg-white" key={i}>
                                {e}
                            </div>
                        )
                    })}
                </div>
                <div className="m-2">
                {def.map((e, i)=>{
                    return(
                        <div className="border-2 border-solid border-black w-8 h-8 rounded-md bg-white" key={i}>
                            {e}
                        </div>
                    )
                })}
                </div>
            <div className="w-20">Attacking troops:{troopNum1}</div>
            <div className="w-20">Defending troops:{troopNum2}</div>
            </div>
        </div>
    );
}