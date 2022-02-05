import React, { useEffect, useState } from 'react';

import CardContainer from './components/CardContainer/CardContainer';
import Gameboard from './components/Gameboard/Gameboard';
import GameOverModal from './components/GameOverModal/GameOverModal';

const PlayScreen: React.FC = () => {
  const maxLives: number = 3;
  const [maxScore, setMaxScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(maxLives);
  const [score, setScore] = useState<number>(0);

  useEffect(() => {
    setLives(maxLives);
    setScore(0);
  }, [])

  return (
    <div>
      {
        lives <= 0 || score >= maxScore ?
        <GameOverModal
          maxLives={maxLives}
          score={score}
          maxScore={maxScore}
          setScore={setScore}
          setLives={setLives}
        />
        : null
      }
      Let's Play!
      <Gameboard
        lives={lives}
        score={score}
      />
      <CardContainer
        lives={lives}
        score={score}
        setMaxScore={setMaxScore}
        setScore={setScore}
        setLives={setLives}
      />
    </div>
  )
}

export default PlayScreen;