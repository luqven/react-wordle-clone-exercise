import React from "react";

export function Banner({ gameOver, guesses, answer }) {
  if (!gameOver) return;
  const won = [...guesses].pop().correct;
  console.log(won);
  return (
    <>
      {won ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in
            <strong>{" " + guesses.length} guesses</strong>.
          </p>
        </div>
      ) : (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
    </>
  );
}
