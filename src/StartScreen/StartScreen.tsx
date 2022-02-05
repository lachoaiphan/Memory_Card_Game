import React from 'react';
import StartButton from './components/StartButton';

import {  } from 'react-router-dom';

const StartScreen:  React.FC = () => {

  return (
    <div
      className='start-screen'
    >
      <div>
        <h1>Memory Card Game</h1>
      </div>
      <div>
        <h4>Technology Edition</h4>
      </div>
      <div>
        <StartButton />
      </div>
    </div>
  )
}

export default StartScreen;