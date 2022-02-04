import {useState} from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    
    let increaseNum =()=>{
    if(count<180)
    {
    setCount(Number(count)+1);
    }
  };
  let decreaseNum = () => {
     if(count>0)
     {
      setCount(count - 1);
     }
  }
 let handleChange = (e)=>{
   setCount(e.target.value);
  }

  return( 
    <div className="counter">
        <h1>{count}</h1>
        <button  onClick={decreaseNum}>-</button>
        <button onClick={increaseNum}>+</button>
    </div>

  )
}
