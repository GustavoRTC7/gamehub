import React, { useEffect, useRef } from 'react';
import { Engine, Render, World, Bodies, Body, Events } from 'matter-js';
import { useGameStore } from '../../store/gameStore';
import { socket } from '../../services/socket';

const ButtonFootball: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<Matter.Engine>();
  const { updateGameState, gameStatus, currentTurn } = useGameStore();

  useEffect(() => {
    if (!canvasRef.current) return;

    // Setup Matter.js engine
    const engine = Engine.create({
      gravity: { x: 0, y: 0 }
    });
    engineRef.current = engine;

    // Create renderer
    const render = Render.create({
      canvas: canvasRef.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        wireframes: false,
        background: '#2c8a3d'
      }
    });

    // Create walls
    const walls = [
      Bodies.rectangle(400, 0, 800, 20, { isStatic: true }), // Top
      Bodies.rectangle(400, 600, 800, 20, { isStatic: true }), // Bottom
      Bodies.rectangle(0, 300, 20, 600, { isStatic: true }), // Left
      Bodies.rectangle(800, 300, 20, 600, { isStatic: true }) // Right
    ];

    // Create ball
    const ball = Bodies.circle(400, 300, 10, {
      restitution: 0.8,
      friction: 0.005,
      render: {
        fillStyle: '#ffffff'
      }
    });

    // Add all bodies to world
    World.add(engine.world, [...walls, ball]);

    // Start engine and renderer
    Engine.run(engine);
    Render.run(render);

    // Handle collisions
    Events.on(engine, 'collisionStart', (event) => {
      // Handle scoring and other game events
    });

    // Socket events
    socket.on('gameUpdate', (newState) => {
      updateGameState(newState);
    });

    return () => {
      Render.stop(render);
      Engine.clear(engine);
      socket.off('gameUpdate');
    };
  }, []);

  return (
    <div className="relative">
      <canvas ref={canvasRef} className="border-4 border-gray-700 rounded-lg" />
      {gameStatus === 'waiting' && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-white text-2xl">Waiting for opponent...</div>
        </div>
      )}
    </div>
  );
};

export default ButtonFootball;