import React from 'react';

interface Props {
  lives: number;
  score: number;
}

const Gameboard: React.FC<Props> = (props) => {

  return (
    <div>
      <div>
        Lives: {props.lives}
      </div>
      <div>
        Score: {props.score}
      </div>
    </div>
  )
}

export default Gameboard;