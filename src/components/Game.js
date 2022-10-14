import React from 'react';
import Board from './Board';
import '../input.css';

function Game() {
  return (
    <div className='w-full h-screen bg-gradient-to-br from-yellow-700 to-yellow-600 flex flex-col justify-center items-center overflow-hidden select-none'>
      <Board />
    </div>
  );
}

export default Game;