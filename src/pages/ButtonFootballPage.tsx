import React, { useEffect } from 'react';
import { useGameStore } from '../store/gameStore';
import ButtonFootball from '../components/game/ButtonFootball';
import GameControls from '../components/game/GameControls';
import Chat from '../components/game/Chat';
import { socket, connectSocket } from '../services/socket';

const ButtonFootballPage: React.FC = () => {
  const { updateGameState } = useGameStore();

  useEffect(() => {
    // Connect to socket when component mounts
    const userId = 'test-user'; // Replace with actual user ID from auth
    connectSocket(userId);

    socket.on('connect', () => {
      console.log('Connected to game server');
    });

    socket.on('gameState', (state) => {
      updateGameState(state);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white">Button Football</h1>
        <p className="text-gray-400">Play the classic table football game online</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <div className="lg:col-span-3">
          <div className="space-y-4">
            <GameControls />
            <ButtonFootball />
          </div>
        </div>
        <div className="lg:col-span-1">
          <Chat />
        </div>
      </div>
    </div>
  );
};

export default ButtonFootballPage;