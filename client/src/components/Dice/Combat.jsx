import DieRoll from "./DieRoll.js"

//taken from stack-overflow
function repeat(func, times) {
    func();
    times && --times && repeat(func, times);
}


export default function Combat(props) {
    const {troopNum1, troopNum2} = props
    //store the values rolled by both players for comparison
    const att = [];
    const def = [];
 

    //set up if else statements to determine how many dice should be rolled for each player
    if(troopNum1 > 2 && troopNum2 > 1){
        repeat(()=> att.push(DieRoll()), 3);
        repeat(()=> def.push(DieRoll()), 2)
    }
    console.log(att);

    return (
        <div>
            <div>
                {att}
            </div>
            <div>
                {def}
            </div>
        </div>
    );
}