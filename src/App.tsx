import "./App.css";
import { useState, useEffect } from "react";

import hole from "./assets/hole.png";
import mole from "./assets/mole.png";

function App() {
  const [moles, setMoles] = useState<boolean[]>(new Array(9).fill(false));
  const [score, setScore] = useState(0);

  function whackMole(index: number) {
    if (!moles[index]) return;
    moleVisibility(index, false);
    setScore(score + 1);
  }

  function moleVisibility(index: number, isVisible: boolean) {
    setMoles((currentMoles) => {
      const newMoles = [...currentMoles];
      newMoles[index] = isVisible;
      return newMoles;
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      moleVisibility(randomIndex, true);

      setTimeout(() => {
        moleVisibility(randomIndex, false);
      }, 800);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [moles]);

  return (
    <>
      <div className="score">Score:{score}</div>
      <div className="grid">
        {moles.map((isMole, index) => (
          <img
            key={index}
            src={isMole ? mole : hole}
            onClick={() => whackMole(index)}
            alt="hole"
          />
        ))}
      </div>
    </>
  );
}

export default App;
