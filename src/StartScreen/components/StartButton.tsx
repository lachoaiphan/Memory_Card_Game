import React from 'react';

import { Link } from 'react-router-dom';

const StartButton: React.FC = () => {
  return (
    <Link
      className='play-button'
      to='/play'
    >
      PLAY
    </Link>
  )
}

export default StartButton;