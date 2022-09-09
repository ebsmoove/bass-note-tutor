import React from "react";
import Notes from "./Notes";

export default function BassNeck({ isFlat, bassStrings, handleClick }) {
  // EB add a small descirption of what this does
  return (
    <div className="bassNeck">
      {bassStrings.map((bassString, idx) => {
        return (
          <Notes
            key={idx}
            notes={bassString}
            stringNumber={idx + 1}
            handleClick={handleClick}
            isFlat={isFlat}
          />
        );
      })}
    </div>
  );
}
