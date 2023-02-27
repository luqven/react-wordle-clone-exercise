import React from "react";
import { range } from "../../utils";
/**
  [
    { letter: 'W', status: 'incorrect' },
    { letter: 'H', status: 'incorrect' },
    { letter: 'A', status: 'correct' },
    { letter: 'L', status: 'misplaced' },
    { letter: 'E', status: 'misplaced' },
  ]
   */
export function Guess({ guess }) {
  return (
    <p key={crypto.randomUUID()} className="guess">
      {range(0, 5).map((idx) =>
        guess ? (
          <span
            key={guess.id + crypto.randomUUID()}
            className={`cell ${guess[idx].status}`}
          >
            {guess ? guess[idx].letter : ""}
          </span>
        ) : (
          <span key={"cell_placeholder_" + idx} className={`cell`}></span>
        )
      )}
    </p>
  );
}
