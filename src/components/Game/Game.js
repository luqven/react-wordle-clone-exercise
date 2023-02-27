import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { checkGuess } from "../../game-helpers";

import { GuessInput } from "../GuessInput";
import { GuessedResult } from "../GuessedResults";
import { Banner } from "../Banner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [gameOver, setGameOver] = React.useState(false);

  const addGuess = (guess) => {
    console.log({ guess });

    const result = checkGuess(guess, answer);

    console.log({ result });
    const correct = result.every((letter) => letter.status === "correct");
    setGuesses([...guesses, { ...result, id: crypto.randomUUID(), correct }]);
    if (correct) {
      setGameOver(true);
    }
    if (guesses.length === 5) {
      setGameOver(true);
    }
  };

  return (
    <>
      <Banner gameOver={gameOver} guesses={guesses} answer={answer} />
      <GuessedResult guesses={guesses} />
      <GuessInput disabled={gameOver} addGuess={addGuess} />
    </>
  );
}

export default Game;
