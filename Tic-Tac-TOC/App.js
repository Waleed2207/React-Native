import { useState } from "react";
import './styles.css';

// The Square component represents a single square on the game board
function Square({ value, onSquareClick }) {
  // The button element represents the square on the board
  return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
  );
}

// The Board component represents the game board, which contains multiple squares
function Board({ xIsNext, squares, onPlay }) {
  // The handleClick function is called when a square is clicked
  function handleClick(i) {
    // If there is already a winner or the square is already occupied, return
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    // Create a new array with the same values as the current squares array
    const nextSquares = squares.slice();
    // Set the value of the clicked square based on which player's turn it is
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    // Call the onPlay function, passing in the updated squares array
    onPlay(nextSquares);
  }

  // Determine the winner of the game, if there is one
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  // Render the game board by creating 3 rows of 3 squares each
  return (
      <>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
  );
}

// The Game component represents the entire game, including the game board and game history
export default function Game() {
  // Initialize the game state, including the history of all moves and the current move index
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  // Handle a new move by updating the game state with the new squares array and current move index
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  // Jump to
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>{description}</button>
        </li>
    );
  });

  return (
      <div className="game">
        <div className="game-board">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        </div>
        <div className="game-info">
          <ol>{moves}</ol>
        </div>
      </div>
  );
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
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
