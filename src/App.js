import React, { useState } from 'react';
import MainMenu from './Components/MainMenu';
import Quiz from './Components/EdnScreen';
import EndScreen from './Components/EdnScreen';
import './App.css';

function App() {
  const [gameState, setGameState] = useState('menu');
  return (
    <div className='App'>
      <h1>Quiz App</h1>
      {gameState === 'menu' && <MainMenu />}
      {gameState === 'quiz' && <Quiz />}
      {gameState === 'endScreen' && <EndScreen />}
    </div>
  );
}

export default App;
