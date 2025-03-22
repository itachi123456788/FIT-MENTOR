import React from 'react';
import { Play, Clock, Target } from 'lucide-react';
import type { Exercise } from '../types';

interface WorkoutCardProps {
  exercise: Exercise;
  onSelect: (exercise: Exercise) => void;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({ exercise, onSelect }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="aspect-video bg-gray-200 relative">
        <img
          src={`https://source.unsplash.com/800x600/?fitness,${exercise.category}`}
          alt={exercise.name}
          className="w-full h-full object-cover"
        />
        <button
          onClick={() => onSelect(exercise)}
          className="absolute bottom-4 right-4 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors"
        >
          <Play className="h-6 w-6" />
        </button>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{exercise.name}</h3>
        <p className="text-gray-600 mt-1 line-clamp-2">{exercise.description}</p>
        <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{exercise.duration} min</span>
          </div>
          <div className="flex items-center">
            <Target className="h-4 w-4 mr-1" />
            <span className="capitalize">{exercise.difficulty}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;