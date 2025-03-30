import { useEffect, useState } from 'react';
import './TicTacToe.styles.css'
const TicTacToe = () => {
  const [square,setSquare] = useState(Array(9).fill(""));
  const [Xturn,setXturn] = useState(true);
  const [result,setResult] = useState("");
  const [startButton,setStartButton]=useState(true);

  const handleClick=(currentIndex:number)=>{
    if(startButton) setStartButton(false);
    console.log("currentIndex",currentIndex);
    const cpySquare=[...square];
    cpySquare[currentIndex]=Xturn?'X':'O';
    setSquare(cpySquare)
    setXturn(!Xturn);
  }
  const Square=({value,currentIndex}:{value:string,currentIndex:number})=>{
    return(
        <div className="square" onClick={()=>handleClick(currentIndex)}>
            {value}
        </div>
    )
  }

  const checkWinner=()=>{
    const winnerPattern=[[0,1,2],[3,4,5],[6,7,8]];
    for(let i=0;i<winnerPattern.length;i++){
        const [x,y,z]=winnerPattern[i];
        console.log("x"+square[x]+"y"+square[y]+"z"+square[z]);
        if(square[x]===square[y] && square[y]===square[z]){
            return square[x];
        }
    }
    return null;
  }

  useEffect(()=>{
    const result=checkWinner();
    console.log("result",result);
     if(checkWinner()){
        console.log("here");
            setResult(checkWinner());
            setStartButton(true);
            setXturn(true);
     }
     let isAllFilled=true;
     for(let i=0;i<square.length;i++){
        if(!square[i]) isAllFilled=false;
     }
     if(isAllFilled){
        setResult("Draw");
        setStartButton(true);
        setXturn(true);
     }
  },[square])
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
      <div className='tic-tac-toe-container'>
        {
            result && <h3> the winner is {result}</h3>
        }
      </div>
      <div className='tic-tac-toe-container'>
        {
            startButton ?  <div><button onClick={()=>setStartButton(false)}>Start Game</button></div> : <h4>{Xturn?"X Chance to Play":"O Chance to Play"}</h4>
        }
      </div>
    </div>
  );
};

export default TicTacToe;
