import React from 'react';
import './App.css';

import PlayScreen from './PlayScreen/PlayScreen';
import StartScreen from './StartScreen/StartScreen';

import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<StartScreen />} />
        <Route path='/play' element={<PlayScreen />} />
        <Route path='*' element={<StartScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
