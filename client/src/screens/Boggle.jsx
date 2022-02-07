import { useEffect, useState } from 'react';
import DieRoll from '../components/Dice/DieRoll';

export default function Boggle() {
    const die1 = { 1: "T", 2: "T", 3: "I", 4: "Y", 5: "S", 6: "D"};
    const die2 = { 1: "T", 2: "C", 3: "I", 4: "U", 5: "M", 6: "O"};
    const die3 = { 1: "G", 2: "N", 3: "E", 4: "E", 5: "A", 6: "A"};
    const die4 = { 1: "N", 2: "N", 3: "R", 4: "H", 5: "Z", 6: "L"};
    const die5 = { 1: "G", 2: "W", 3: "E", 4: "E", 5: "N", 6: "H"};
    const die6 = { 1: "T", 2: "T", 3: "O", 4: "O", 5: "A", 6: "W"};
    const die7 = { 1: "E", 2: "E", 3: "I", 4: "U", 5: "S", 6: "N"};
    const die8 = { 1: "P", 2: "A", 3: "F", 4: "F", 5: "S", 6: "K"};
    const die9 = { 1: "H", 2: "I", 3: "M", 4: "N", 5: "U", 6: "Qu"};
    const die10 = { 1: "R", 2: "V", 3: "L", 4: "E", 5: "Y", 6: "D"};
    const die11 = { 1: "T", 2: "E", 3: "R", 4: "W", 5: "H", 6: "V"};
    const die12 = { 1: "T", 2: "E", 3: "I", 4: "O", 5: "S", 6: "S"};
    const die13 = { 1: "L", 2: "I", 3: "E", 4: "R", 5: "D", 6: "X"};
    const die14 = { 1: "S", 2: "O", 3: "A", 4: "C", 5: "H", 6: "P"};
    const die15 = { 1: "T", 2: "T", 3: "E", 4: "R", 5: "Y", 6: "L"};
    const die16 = { 1: "B", 2: "O", 3: "O", 4: "J", 5: "A", 6: "B"};
    const arr = [die1, die2, die3, die4, die5, die6, die7, die8, die9, die10, die11, die12, die13, die14, die15, die16];
    const [newArr, setNewArr] = useState([])
    const [toggle, setToggle] = useState(false);
    const arr2 = [];

    //shuffle function taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;

        while (currentIndex !== 0) {      
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;      
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }      
        return array;
      }
      
    
    const handleClick = () => {
       setToggle((prevToggle)=> !prevToggle)
    }
    
    useEffect(()=>{
        arr.map((e)=>{
            arr2.push(e[DieRoll()]);
        })
        setNewArr(shuffle(arr2))
    },[toggle])


  return (
    <div className='flex flex-col items-center'>
        <h1 className='text-4xl m-5'>Boggle</h1>
        <div className='bg-blue-800 h-96 w-96 grid grid-cols-4 grid-rows-4 gap-2 p-3'>
            {newArr.map((e, i)=>{
                return(
                    <div key={i} className='bg-white text-7xl rounded-md flex flex-col items-center'>
                        {e}
                    </div>
                )
            })}
        </div>
        <button onClick={()=> handleClick()} className='text-2xl m-4'>Start!</button>
    </div>
    );
}
