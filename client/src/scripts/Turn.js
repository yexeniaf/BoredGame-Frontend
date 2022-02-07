// Takes the current turn, and number of players as arguments.
// When a button or action is taken that should pass the turn, run this function:
export default function Turn(turn, playerNum) {
    // Error handling should something cause a negative turn value.
    if (turn <= 0) {
      console.error("Turn value negative.")
      turn = 1;

    // Ticks turn count back to one if turn count is >= to the number of players when the function fires.
    } else if (turn >= playerNum) {
      turn = (1);
    } else {
      turn++;
    };
    return turn;
};
