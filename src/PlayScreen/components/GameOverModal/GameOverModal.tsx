import React from 'react';

interface Props {
  maxLives: number;
  maxScore: number;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setLives: React.Dispatch<React.SetStateAction<number>>;
}

const GameOverModal: React.FC<Props> = (props) => {

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h1>{props.score >= props.maxScore ? 'CONGRATULATIONS' : 'GAME OVER'}</h1>
        <p>Your score is: {props.score}</p>
        <div
          className='play-button'
          onClick={() => {window.location.reload()}}
        >
          <p><strong>PLAY AGAIN</strong></p>
        </div>
      </div>
    </div>
  )
}

export default GameOverModal;