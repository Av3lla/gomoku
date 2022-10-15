import React from "react";
import Square from "./Square";

function Board(props) {
  function renderSquare(i)  {
    return (
      <Square
        value={props.boardArr[i]}
        onClick={() => {props.onClick(i)}}
      />
    );
  }

  return (
    <div className="grid grid-cols-3 gap-2">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  );
}

export default Board;