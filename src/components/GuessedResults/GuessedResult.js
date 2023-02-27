import React from "react";
import { range } from "../../utils";
import { Guess as GuessCell } from "../Guess";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
export function GuessedResult({ guesses }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) => {
        return <GuessCell key={"-row-" + i} guess={guesses[i]} />;
      })}
    </div>
  );
}
