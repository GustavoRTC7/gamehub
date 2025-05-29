import React from 'react';
import { useApp } from '../context/AppContext';
import GameCard from '../components/GameCard';
import FriendsList from '../components/FriendsList';
import PlayerStats from '../components/PlayerStats';
import Snake from '../components/games/Snake';
import Hangman from '../components/games/Hangman';
import { ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const { currentUser, users } = useApp();
  
  return (
    <div className="px-4 py-6 space-y-8">
      <h1 className="text-2xl font-bold text-white">Welcome back, {currentUser.username}!</h1>
      
      <PlayerStats user={currentUser} />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Featured Games</h2>
              <a href="#" className="text-purple-400 flex items-center text-sm hover:underline">
                View all <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <h3 className="text-lg font-bold text-white p-4 border-b border-gray-700">Snake Game</h3>
                <Snake />
              </div>
              <div className="bg-gray-800 rounded-xl overflow-hidden">
                <h3 className="text-lg font-bold text-white p-4 border-b border-gray-700">Hangman</h3>
                <Hangman />
              </div>
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-white">Recent Activity</h2>
              <a href="#" className="text-purple-400 flex items-center text-sm hover:underline">
                View all <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-gray-800 rounded-lg p-4 flex items-center">
                  <div className="w-12 h-12 rounded-lg bg-purple-700 flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{i}</span>
                  </div>
                  <div className="flex-1">
                    <div className="text-white font-medium">
                      {i === 1 ? 'New high score in Snake Game!' : 
                       i === 2 ? 'Won a game of Hangman' : 
                       'Started playing Snake Game'}
                    </div>
                    <div className="text-gray-400 text-sm">
                      {i === 1 ? '2 hours ago' : 
                       i === 2 ? 'Yesterday' : 
                       '2 days ago'}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div>
          <FriendsList currentUser={currentUser} users={users} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;