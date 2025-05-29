import React from 'react';
import GameBoard from '../components/game/GameBoard';
import GameControls from '../components/game/GameControls';

const ButtonFootballPage: React.FC = () => {
  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Button Football</h1>
        <p className="text-gray-400">Play the classic table football game online</p>
      </div>
      
      <div className="max-w-4xl mx-auto space-y-4">
        <GameControls />
        <GameBoard />
      </div>
    </div>
  );
};

export default ButtonFootballPage;