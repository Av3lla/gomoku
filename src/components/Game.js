import React, { useState } from 'react';
import Board from './Board';
import '../input.css';
import '../styles/background.css'

function Game() {
  const [isXTurn, setIsXTurn] = useState(true);
  const [boardSize, setBoardSize] = useState(15);
  const [boardArr, setBoardArr] = useState(Array.from(Array(boardSize), () => Array(boardSize).fill(null)));
  console.log(boardArr);

  function clickSquare(x, y)  {
    const newBoardArr = boardArr;
    newBoardArr[x][y] = isXTurn ? 'X' : 'O';
    setBoardArr(newBoardArr);
    setIsXTurn(!isXTurn);
  }

  function calculateGomoku()  {

  }

  return (
    <div>
      <div id='bg'>
        <div className='bg'></div>
        <div className='bg bg2'></div>
        <div className='bg bg3'></div>
      </div>
      <div className='w-full h-screen flex flex-col justify-center items-center overflow-hidden select-none'>
        <Board
          boardArr={boardArr}
          boardSize={boardSize}
          onClick={(x, y) => clickSquare(x, y)}
        />
      </div>
    </div>
  );
}

export default Game;