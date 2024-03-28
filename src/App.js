import React ,{useState, useEffect}from 'react';
import  "./App.css"
import Clock from './Clock';


function Square({ value, onSquareClick, dataTest, IsDisabled }) {
  return (
    <button className="squareBtn" disabled={IsDisabled} data-testid={"button-"+dataTest} onClick={onSquareClick}>
      {value}
    </button>
  );
}


function Board(){
  
  const [xIsNext, setxIsNext] = useState(true);
  const [squares, setSquares ] = useState(Array(9).fill("/"))
  const [Iswinner, setIsWinner] = useState(null);
  const [isDisabled, setIsDisabled] = useState(Array(9).fill(false));

  const [color, setColor] = useState('red');
  const time = useTime();
  
function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

  function handleClick(i){
  
      if(Iswinner || squares[i]!== "/") return;
  
      const nextSquares = squares.slice();
      const nextDisabled = isDisabled.slice();
      xIsNext ? nextSquares[i] = "X" : nextSquares[i] = "O";
      nextDisabled[i] = true;
      setSquares(nextSquares);
      setxIsNext(!xIsNext);
      setIsDisabled(nextDisabled);
     
      if(calculateWinner(nextSquares)!=="/" && calculateWinner(nextSquares)!==null){
        let message;
        if(calculateWinner(nextSquares) === "X"){
            message = "Cross Is Winner";
        }
        else {
            message = "Circle Is Winner";
        }
        setIsWinner(message); 
        
      }  else if(nextSquares.every((square) => square!== "/")){
          setIsWinner("Draw");
      }
  
    }

  function calculateWinner(squares) {
      const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a]!=="/" && squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
  }



function resetGame(){
  setSquares(Array(9).fill("/"));
  setxIsNext(true);
  setIsWinner(null);
  setIsDisabled(Array(9).fill(false))

}
return(
  <>
      <p> Pick a Color: {''}
      <select name="" id="" value={color} onChange={e=>setColor(e.target.value)}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue </option>
        <option value="yellow">Yellow</option>
      </select>
    
    </p>
    <Clock color={color} time={time.toLocaleTimeString()}/>
    <div className="status" style= { {color:color}}data-testid="winner">{Iswinner}</div>
    <button onClick={resetGame} data-testid="start" className="start-new-game-btn btn btn-primary">Start New Game</button>
    <div className="board-row">
        <Square value={squares[0]} IsDisabled={isDisabled[0]} dataTest ="1" onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} IsDisabled={isDisabled[1]} dataTest ="2" onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} IsDisabled={isDisabled[2]} dataTest ="3" onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} IsDisabled={isDisabled[3]} dataTest ="4" onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} IsDisabled={isDisabled[4]} dataTest ="5" onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} IsDisabled={isDisabled[5]} dataTest ="6" onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} IsDisabled={isDisabled[6]} dataTest ="7" onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} IsDisabled={isDisabled[7]} dataTest ="8" onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} IsDisabled={isDisabled[8]} dataTest ="9" onSquareClick={() => handleClick(8)} />
      </div>
  </>
)
 
}


export default function Home() {
  
 
  return (
      <div className="game">
          <h1>Tic-Tac-Toe</h1>
          <Board/>
      </div>
  );
}

