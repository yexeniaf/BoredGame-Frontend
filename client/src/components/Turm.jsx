import { useState } from "react";

//change to fit the game
export default function Turn() {
  const numOfPlayers = 4;

  const [turn, setTurn] = useState(1);

  const handlePass = () => {
    setTurn(turn + 1);
    if (turn >= numOfPlayers) {
      setTurn(1);
    }
  };

  return (
    <>
      <button onClick={handlePass}>pass</button>
      <h1>{turn}</h1>
    </>
  );
}
