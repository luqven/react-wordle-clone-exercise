import React from "react";

export function GuessInput({ addGuess, disabled }) {
  const [guess, setGuess] = React.useState("");

  const submitGuess = (e) => {
    e.preventDefault();
    if (guess.length < 5) {
      alert("Your guess must be at least 5 characters");
      setGuess("");
      return;
    } else if (guess.length > 5) {
      alert("Your guess must be at max 5 characters");
      setGuess("");
      return;
    }
    addGuess(guess);
    setGuess("");
  };

  const onChangeHandler = (e) => {
    const input = e.target.value.toUpperCase();
    setGuess(input);
  };

  return (
    <form onSubmit={(e) => submitGuess(e)} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        onChange={onChangeHandler}
        value={guess}
        id="guess-input"
        type="text"
      />
    </form>
  );
}
