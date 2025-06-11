import React, { useState } from "react";

const App = () => {
  const [box, setBox] = useState(
    Array.from({ length: 8 }, () => Array(8).fill(null))
  );
  const colorDiag = (i, j) => {
    const newBox = Array.from({ length: 8 }, () => Array(8).fill(null));
    const direction = [
      [-1, -1],
      [1, 1],
      [-1, 1],
      [1, -1],
    ];
    direction.forEach(([nr, nc]) => {
      let x = i + nr;
      let y = j + nc;
      while (x >= 0 && x < 8 && y >= 0 && y < 8) {
        newBox[x][y] = "D";
        x += nr;
        y += nc;
      }
    });
    newBox[i][j] = "C";
    setBox(newBox);
  };
  return (
    <div className="grid grid-cols-8 border w-[600px]">
      {box.map((r, i) =>
        r.map((cell, j) => {
          const isDark = (i + j) % 2 === 0;
          const bg =
            cell === "C"
              ? "bg-red-800"
              : cell === "D"
              ? "bg-red-600"
              : isDark
              ? "bg-black"
              : "bg-white";
          return (
            <div
              key={`${i}-${j}`}
              className={`h-[80px] w-[80px] ${bg} border`}
              onClick={() => {
                colorDiag(i, j);
              }}
            ></div>
          );
        })
      )}
    </div>
  );
};

export default App;
