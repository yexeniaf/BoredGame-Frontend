import DieRoll from "./DieRoll.js"

//stack-overflow
function repeat(func, times) {
    func();
    times && --times && repeat(func, times);
}


export default function Combat() {
    const att = [];
    const def = [];

    let troopNum1 = 3;
    let troopNum2 = 2;

    if(troopNum1 > 2 && troopNum2 > 1){
        repeat(()=> att.push(DieRoll()), 3);
        repeat(()=> def.push(DieRoll()), 2)
    }
    console.log(att);
}