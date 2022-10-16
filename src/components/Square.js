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
    <button className='w-12 h-12 inline-block align-bottom border border-black bg-yellow-700' onClick={props.onClick}>
      {/* <img src={getColorByTurn(props.turn)} alt="" /> */}
      {props.value}
    </button>
  );
}

export default Square;