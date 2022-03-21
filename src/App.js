import React from "react";
import BassNeck from "./components/BassNeck";
import "./App.css";
import Staff from "./components/Staff";

const CurrentNoteContext = React.createContext("");
function App() {
  return (
    <div className='wrapper'>
      <Staff letter='A1' />

      <BassNeck />
    </div>
  );
}

// function App() {
//   const synth = new Tone.Synth().toDestination();
//   const bassNeck = <div className='bassNeck'></div>;

//   bassStrings.forEach((bassString) => {
//     const fret = <div className='fret'></div>;

//     console.log(fret);
//     bassString.forEach((letter) => {
//       const note = <div className='note'>{letter}</div>;

//       // note.addEventListener("mousedown", (evt) => {
//       //   // showStaffNote(letter);
//       //   Tone.start();
//       //   synth.triggerAttackRelease(letter, "16n");

//       //   // const now = Tone.now();
//       //   // synth.triggerAttackRelease(letter, tune.duration, now);
//       //   evt.preventDefault();
//       // });
//       fret.appendChild(note);
//       console.log(fret);
//     });

//     bassNeck.appendChild(fret);
//   });

//   return bassNeck;
// }

export default App;
