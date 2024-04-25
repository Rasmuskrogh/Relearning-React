import { useState, useRef } from "react";

export default function Player() {
  const playerName = useRef();

  const [enteredPlayer, setEnteredPlayer] = useState(null);
  // const [submitted, setSubmitted] = useState(false);

  // const handleChange = (e) => {
  //   setSubmitted(false);
  //   setEnteredPlayer(e.target.value);
  // };

  const handleClick = () => {
    setEnteredPlayer(playerName.current.value);
    playerName.current.value = "";
  };

  return (
    <section id="player">
      <h2>Welcome {enteredPlayer ?? "unknown entity"}</h2>
      <p>
        <input
          ref={playerName}
          type="text" /* onChange={handleChange} value={enteredPlayer} */
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
