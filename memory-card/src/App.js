
import './App.css';
import FetchApi from './fetchAPI'
import React, {useState, useEffect} from 'react';

function App() {
  const [score, setScore] = useState(0);
  const[bestScore, setBestScore] = useState(0)
  useEffect(() => {
    if (score > 7) {
      setBestScore((prevBestScore) => prevBestScore + 1);
      setScore(0);  // Reset score to 0
    }
  }, [score])
  useEffect(()=>{
    if(bestScore > 7){
      alert("You won the game");
      setScore(0)
      setBestScore(0)
    }
  }, [bestScore])

  return (
    <div className="App">
      <div className="Container">
      <div className="Header">
        <h1>Amphibia Memory Game</h1>
        <div>
        <p> Score: <span>{score}</span> </p> 
        <p> Best Score: <span>{bestScore}</span> </p> 
        </div>
      </div>
      </div>
      <FetchApi score={score} setScore={setScore}/>
    </div>
  );
}

export default App;
