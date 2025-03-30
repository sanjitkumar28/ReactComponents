import { useState } from 'react';
import './TicTacToe.styles.css'
const TicTacToe = () => {
  const [square,setSquare] = useState(Array(9).fill(""));
  const [Xturn,setXturn] = useState(true);

  const handleClick=(currentIndex)=>{
    console.log("currentIndex",currentIndex);
    const cpySquare=[...square];
    cpySquare[currentIndex]=Xturn?'X':'O';
    setSquare(cpySquare)
    setXturn(!Xturn);
  }
  const Square=({value,currentIndex})=>{
    return(
        <div className="square" onClick={()=>handleClick(currentIndex)}>
            {value}
        </div>
    )
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Tic Tac Toe</h1>
      <div className="row-container">
        <Square value={square[0]} currentIndex={0}/>
        <Square value={square[1]} currentIndex={1}/>
        <Square value={square[2]} currentIndex={2}/>
      </div>
      <div className="row-container">
      <Square value={square[3]} currentIndex={3}/>
      <Square value={square[4]} currentIndex={4}/>
      <Square value={square[5]} currentIndex={5}/>
      </div>
      <div className="row-container">
      <Square value={square[6]} currentIndex={6}/>
      <Square value={square[7]} currentIndex={7}/>
      <Square value={square[8]} currentIndex={8}/>
      </div>
    </div>
  );
};

export default TicTacToe;
