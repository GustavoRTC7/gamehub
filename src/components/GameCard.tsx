import React from 'react';
import { Users, MapPin, Signal, Award } from 'lucide-react';
import { Game } from '../types';
import Card, { CardContent } from './ui/Card';
import Badge from './ui/Badge';
import Button from './ui/Button';

interface GameCardProps {
  game: Game;
  onClick?: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'open':
        return <Badge variant="success">Open</Badge>;
      case 'in-progress':
        return <Badge variant="warning">In Progress</Badge>;
      case 'finished':
        return <Badge variant="error">Finished</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  const getSkillBadge = (level: string) => {
    switch (level) {
      case 'beginner':
        return <Badge variant="info" className="bg-green-800">Beginner</Badge>;
      case 'intermediate':
        return <Badge variant="info" className="bg-blue-800">Intermediate</Badge>;
      case 'advanced':
        return <Badge variant="info" className="bg-purple-800">Advanced</Badge>;
      case 'pro':
        return <Badge variant="info" className="bg-red-800">Pro</Badge>;
      default:
        return <Badge>Unknown</Badge>;
    }
  };

  return (
    <Card hover onClick={onClick} className="h-full flex flex-col">
      <div className="relative">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          {getStatusBadge(game.status)}
          {getSkillBadge(game.skillLevel)}
        </div>
      </div>
      <CardContent className="flex-grow flex flex-col">
        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
        
        <div className="space-y-2 mb-4 flex-grow">
          <div className="flex items-center text-gray-400">
            <Users size={16} className="mr-2" />
            <span>{game.players.current}/{game.players.max} Players</span>
          </div>
          <div className="flex items-center text-gray-400">
            <MapPin size={16} className="mr-2" />
            <span>{game.map}</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Signal size={16} className="mr-2" />
            <span>{game.ping}ms</span>
          </div>
          <div className="flex items-center text-gray-400">
            <Award size={16} className="mr-2" />
            <span>{game.mode}</span>
          </div>
        </div>
        
        <div className="mt-auto">
          <Button 
            variant={game.status === 'open' ? 'primary' : 'outline'} 
            fullWidth
            disabled={game.status !== 'open'}
          >
            {game.status === 'open' ? 'Join Game' : 'Spectate'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;