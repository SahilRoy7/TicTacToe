import React, {useState} from "react";
import './App.css';
import { Scoreboard } from "./Components/scoreboard";
import { Board } from "./Components/Board";
import {Resetbutton} from "./Components/resetbutton";

function App() {
  const WIN_CONDITIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  const [board, setBoard] = useState(Array(9).fill(null)); 
  const [xplaying, setxplaying] = useState(true);           // x starts the game
  const [scores, setScores]= useState({Sahil : 0, Bitu:0});
  const [gameOver, setGameover] = useState(false);
  const handleBoxClick = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      if(idx === boxIdx) {
        return xplaying === true ? "X" : "O";
      }
      else{
        return value;
      }
    })
    setBoard(updateBoard);
    const winner= checkwinner(updateBoard);
    
    if(winner){
      if(winner==="O"){
        let {Bitu}=scores;
        Bitu++;
        setScores({...scores, Bitu});
      
        alert("Bitu Wins!!!\n Press Ok to Continue.");
      }
      else if(winner==="X"){
        let {Sahil}=scores;
        Sahil++;
        setScores({...scores, Sahil});
        
        alert("Sahil Wins!!!\n Press Ok to Continue."); 
      }
    }
    
      
      setxplaying(!xplaying);
  
    
    
  }
  const checkwinner = (board) => {
    for(let i=0;i<WIN_CONDITIONS.length;i++){
      const[x,y,z] = WIN_CONDITIONS[i];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameover(true);       
        return board[x];
      } 
    }
  }
  const resetBoard =() => { 
    setGameover(false);
    setBoard(Array(9).fill(null));
  }
  return (
    <div className="App">
      <Board board={board} onClick={ gameOver ? resetBoard : handleBoxClick} />
      <Scoreboard scores={scores} xplaying={xplaying} />
      <Resetbutton resetBoard={resetBoard} />
    </div>
  ); 
}

export default App;
