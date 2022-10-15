import React from "react";
/* import goB from '../assets/go_b.png';
import goW from '../assets/go_w.png';
import transparent from '../assets/transparent.png'; */

function Square(props)  {
  /* function getColorByTurn(turn)  {
    if (turn === 'X')  {
      return goB;
    } else if (turn === 'O')  {
      return goW;
    } else  {
      return transparent;
    }
  } */

  return (
    <button className='w-24 h-24 bg-yellow-800' onClick={props.onClick}>
      {/* <img src={getColorByTurn(props.turn)} alt="" /> */}
      {props.value}
    </button>
  );
}

export default Square;