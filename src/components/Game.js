import React, { useState } from 'react';
import Board from './Board';
import '../input.css';

function Game() {
  const [isXTurn, setIsXTurn] = useState(true);
  const [boardArr, setBoardArr] = useState(Array(9).fill(null));

  function clickSquare(i)  {
    let newBoardArr = boardArr;
    newBoardArr[i] = isXTurn ? 'X' : 'O';
    setBoardArr(newBoardArr);
    setIsXTurn(!isXTurn);
    console.log(boardArr, isXTurn);
  }

  return (
    <div className='w-full h-screen bg-gradient-to-br from-yellow-700 to-yellow-600 flex flex-col justify-center items-center overflow-hidden select-none'>
      <Board
        boardArr={boardArr}
        onClick={(i) => clickSquare(i)}
      />
    </div>
  );
}

export default Game;