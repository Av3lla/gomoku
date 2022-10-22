import React, { useState } from 'react';
import Board from './Board';
import '../input.css';
import '../styles/background.css'

function Game() {
  const [isBlackTurn, setIsBlackTurn] = useState(true);
  const [boardSize, setBoardSize] = useState(15);
  const [boardArr, setBoardArr] = useState(Array.from(Array(boardSize), () => Array(boardSize).fill(null)));
  const [isFinish, setIsFinish] = useState(false);

  function clickSquare(x, y)  {
    if (isFinish === true || boardArr[x][y] != null)  {
      return;
    }
    const newBoardArr = boardArr;
    newBoardArr[x][y] = isBlackTurn ? '●' : '○';
    setBoardArr(newBoardArr);
    setIsBlackTurn(!isBlackTurn);
    checkGomoku();
  }

  function checkGomoku()  {
    const dx = [1, 0, 1, 1];
    const dy = [0, 1, 1, -1];

    for (let x = 0; x < boardSize; x++) {
      for (let y = 0; y < boardSize; y++) {
        if (boardArr[x][y] === null)  {
          continue;
        } else {
          for (let i = 0; i < 4; i++) {
            let count = 1;
            let nx = x + dx[i];
            let ny = y + dy[i];

            while (true)  {
              if (nx > boardSize-1 || ny > boardSize-1) {
                break;
              }
              if (boardArr[nx][ny] === boardArr[x][y])  {
                count += 1;
              } else  {
                count = 0;
              }
              if (count === 5) {
                if (boardArr[nx+dx[i]][ny+dy[i]] === boardArr[x][y])  {
                  if (isBlackTurn === true) {
                    console.log('백이 승리하였습니다. (흑이 장목을 놓았습니다.)');
                  } else  {
                    console.log('백이 승리하였습니다.');
                  }
                } else  {
                  console.log(`${isBlackTurn}이 승리하였습니다.`);
                }
                setIsFinish(true);
                return true;
              }
              nx += dx[i];
              ny += dy[i];
            }
          }
        }
      }
    }
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