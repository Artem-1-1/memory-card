import '../src/styles/App.css'
import { useState } from 'react'
import Header from './components/Header';
import Card from './components/Card';
import images from './components/images.js'

const shuffle = (arr) => {
  if (!Array.isArray(arr)) return [];
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export default function App() {
  const [score, setScore] = useState(0);
  const [shuffledImages, setShuffledImages] = useState(images);
  const [bestScore, setBestScore] = useState(0);
  const [guessArr, setGuessArr] = useState([]);
  const [showDialog, setShowDialog] = useState(false);

  const handleClick = (image) => {
    if(guessArr.includes(images)) {
      setBestScore(Math.max(bestScore, score));
      setScore(0);
      setGuessArr([]);
    } else {
      const newScore = score + 1;
      setGuessArr([...guessArr, image]);
      setScore(newScore);

      if (newScore === 12) {
        setShowDialog(true);
      }
    }
    setShuffledImages(shuffle(images));
  };

  const handlePLayAgain = () => {
    setScore(0);
    setBestScore(0);
    setGuessArr([]);
    setShuffledImages(shuffle(images));
    setShowDialog(false);
  };


  return (
    <>
      <Header></Header>
      <div className='scoreBoard'>
        <h2>Score: {score}</h2>
        <h2>Best Score: {bestScore}</h2>
      </div>

      <main>
        {shuffledImages.map((image) => (
          <Card
            key={image.name}
            img={image.file}
            name={image.name}
            onClick={() => handleClick(image.name)}/>))}
      </main>

      {showDialog && (
        <div className='dialog-overlay'>
          <div className='dialog-box'>
            <p>You win!</p>
            <button onClick={handlePLayAgain}>Play Again</button>
          </div>
        </div>
      )}
    </>
  )
}
