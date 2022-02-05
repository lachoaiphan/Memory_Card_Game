import React from 'react';

interface Props {
  lives: number;
  score: number;
}

const Gameboard: React.FC<Props> = (props) => {

  return (
    <div
      className='gameboard'
    >
      <div>
        Lives: {props.lives}
      </div>
      <div>
        <div>
          <h1>Memory Card Game</h1>
        </div>
        <div>
          <h4>Technology Edition</h4>
        </div>
      </div>
      <div>
        Score: {props.score}
      </div>
    </div>
  )
}

export default Gameboard;