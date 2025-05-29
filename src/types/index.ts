export interface User {
  id: string;
  username: string;
  avatar: string;
  level: number;
  rank: string;
  totalMatches: number;
  wins: number;
  losses: number;
  winRate: number;
  status: 'online' | 'offline' | 'in-game';
  friends: string[];
}

export interface Game {
  id: string;
  title: string;
  thumbnail: string;
  players: {
    current: number;
    max: number;
  };
  mode: string;
  map: string;
  status: 'open' | 'in-progress' | 'finished';
  skillLevel: 'beginner' | 'intermediate' | 'advanced' | 'pro';
  ping: number;
  host: string;
}

export interface LeaderboardEntry {
  userId: string;
  username: string;
  avatar: string;
  rank: number;
  level: number;
  wins: number;
  losses: number;
  winRate: number;
  lastPlayed: string;
}

export interface Match {
  id: string;
  gameType: string;
  map: string;
  date: string;
  players: {
    id: string;
    username: string;
    team: 'red' | 'blue';
    score: number;
    result: 'win' | 'loss' | 'draw';
  }[];
  status: 'scheduled' | 'live' | 'completed';
  result?: 'red' | 'blue' | 'draw';
}