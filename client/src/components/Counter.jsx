import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(props.troops);

  let increaseNum = () => {
    if (count < 180) {
      setCount(Number(count) + 1);
    }
  };
  let decreaseNum = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  let handleChange = (e) => {
    setCount(e.target.value);
  };

  return (
    <div className="counter">
      <h1 className="font-bold">{count}</h1>
      <button className="mx-1 text-white bg-red-600 w-6" onClick={decreaseNum}>
        -
      </button>
      <button
        className="mx-1 text-white bg-green-500 w-6"
        onClick={increaseNum}
      >
        +
      </button>
    </div>
  );
}
