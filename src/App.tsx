import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import GamesPage from './pages/GamesPage';
import LeaderboardPage from './pages/LeaderboardPage';
import FriendsPage from './pages/FriendsPage';
import SnakePage from './pages/SnakePage';
import HangmanPage from './pages/HangmanPage';
import ButtonFootballPage from './pages/ButtonFootballPage';

const MainContent: React.FC = () => {
  const { activeTab } = useApp();
  
  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'games':
        return <GamesPage />;
      case 'leaderboard':
        return <LeaderboardPage />;
      case 'friends':
        return <FriendsPage />;
      case 'profile':
        return <div className="p-6 text-white">Profile page content</div>;
      case 'settings':
        return <div className="p-6 text-white">Settings page content</div>;
      case 'snake':
        return <SnakePage />;
      case 'hangman':
        return <HangmanPage />;
      case 'button-football':
        return <ButtonFootballPage />;
      default:
        return <HomePage />;
    }
  };
  
  return (
    <div className="bg-gray-900 min-h-screen text-gray-200">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 overflow-auto md:ml-64">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}

export default App;