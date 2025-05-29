import React, { useState } from 'react';
import { Search, Menu, X, Bell, MessageSquare } from 'lucide-react';
import Avatar from './ui/Avatar';
import Input from './ui/Input';
import { useApp } from '../context/AppContext';

const Navbar: React.FC = () => {
  const { currentUser, setSearchQuery } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and desktop navigation */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-white text-xl font-bold">Game<span className="text-purple-500">Pulse</span></span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 transition">Home</a>
                <a href="#" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition">Games</a>
                <a href="#" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition">Leaderboard</a>
                <a href="#" className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-800 hover:text-white transition">Friends</a>
              </div>
            </div>
          </div>
          
          {/* Search, notifications, and profile */}
          <div className="hidden md:flex items-center">
            <div className="relative mr-4">
              <Input 
                type="text" 
                placeholder="Search games, players..." 
                onChange={handleSearch}
                leftIcon={<Search size={18} />} 
                className="w-64"
              />
            </div>
            
            <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2">
              <Bell size={20} />
            </button>
            
            <button className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-4">
              <MessageSquare size={20} />
            </button>
            
            <div className="flex items-center">
              <Avatar 
                src={currentUser.avatar} 
                alt={currentUser.username}
                status={currentUser.status}
                size="sm"
              />
              <div className="ml-2">
                <p className="text-sm font-medium text-white">{currentUser.username}</p>
                <p className="text-xs text-gray-400">Level {currentUser.level}</p>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800">Home</a>
            <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">Games</a>
            <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">Leaderboard</a>
            <a href="#" className="text-gray-300 block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-800 hover:text-white">Friends</a>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-800">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <Avatar 
                  src={currentUser.avatar} 
                  alt={currentUser.username}
                  status={currentUser.status}
                />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-white">{currentUser.username}</div>
                <div className="text-sm font-medium text-gray-400">Level {currentUser.level}</div>
              </div>
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800">Your Profile</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800">Settings</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-800">Sign out</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;