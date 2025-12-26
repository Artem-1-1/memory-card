export default function Header({scoreData = { currentScore: 0, bestScore: 0}}) {
  const {currentScore, bestScore} = scoreData;
  return (
    <>
    <header className="title">
      <div className="headerTitle">
        <h1>Touhou Memory Card Game</h1>
      </div>
      <div className="gameDescription">
        <p>Get points by clicking on an image but don't click on any more than once!</p>
      </div>
      <div className="scoreBoard">
        <p>Current Score: <strong>{currentScore}</strong></p>
        <p>Best Score: <strong>{bestScore}</strong></p>
      </div>
    </header>
    </>
  )
}