import "./App.css";
import { useState, useEffect } from "react";

import hole from "./assets/hole.png";
import mole from "./assets/mole.png";

function App() {
  const [moles, setMoles] = useState(Array(9).fill(false));
  const [score, setScore] = useState(0);
  // score
  // whack the mole + 1

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      const newMoles = [...moles];
      newMoles[randomIndex] = true;
      setMoles(newMoles);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <div className="score">Score: {score}</div>
      <div className="grid">
        {moles.map((isMole) => (
          <img src={isMole ? mole : hole} alt="hole" />
        ))}
      </div>
    </>
  );
}

export default App;
