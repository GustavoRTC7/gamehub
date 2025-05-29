import React from 'react';
import { useApp } from '../context/AppContext';
import { Gamepad2 } from 'lucide-react';

const GamesPage: React.FC = () => {
  const { setActiveTab } = useApp();
  
  const games = [
    {
      id: 'snake',
      title: 'Snake Game',
      description: 'Jogo clássico da cobrinha. Colete a comida e cresça sem bater nas paredes ou em si mesmo.',
      image: 'https://images.pexels.com/photos/207983/pexels-photo-207983.jpeg?auto=compress&cs=tinysrgb&w=500'
    },
    {
      id: 'hangman',
      title: 'Jogo da Forca',
      description: 'Adivinhe a palavra escolhendo letras. Disponível em português com temas de objetos e comidas.',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=500'
    }
  ];

  return (
    <div className="px-4 py-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-2">Jogos Disponíveis</h1>
        <p className="text-gray-400">Escolha um jogo para começar</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {games.map(game => (
          <div
            key={game.id}
            className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all cursor-pointer"
            onClick={() => setActiveTab(game.id)}
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
              <p className="text-gray-400">{game.description}</p>
              <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition flex items-center">
                <Gamepad2 size={20} className="mr-2" />
                Jogar Agora
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GamesPage;