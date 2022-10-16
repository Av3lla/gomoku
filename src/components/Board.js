import React from "react";
import Square from "./Square";

function Board(props) {
  function renderRow(x) {
    const row = [];
    for (let y = 0; y < props.boardSize; y++) {
      row.push(
        <Square
          value={props.boardArr[x][y]}
          onClick={() => {props.onClick(x, y)}}
          key={y}
        />
      );
    }
    return row;
  }

  function renderBoard()  {
    const rows = [];
    for (let x = 0; x < props.boardSize; x++) {
      rows.push(
        <div className="board-row" key={x}>
          {renderRow(x)}
        </div>
      );
    }
    return rows;
  }

  return (
    <div className="board w-auto h-11/12 flex flex-col justify-center items-center shadow-2xl">
      {renderBoard()}
    </div>
  );
}

export default Board;