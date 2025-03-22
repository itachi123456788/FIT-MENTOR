import React from 'react';
import { Play, TrendingUp, Dumbbell, Heart } from 'lucide-react';
import type { Exercise, UserProfile } from '../types';
import { useStore } from '../store';

interface HomePageProps {
  userProfile: UserProfile;
  onExerciseSelect: (exercise: Exercise) => void;
}

const HomePage: React.FC<HomePageProps> = ({ userProfile, onExerciseSelect }) => {
  const { exercises } = useStore();
  const recommendedExercises = exercises.filter(
    (exercise) => 
      userProfile.preferredCategories.includes(exercise.category) &&
      exercise.difficulty === userProfile.fitnessLevel
  ).slice(0, 3);

  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      {/* Welcome Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome Back to Your Fitness Journey</h1>
        <p className="text-xl text-gray-600">
          Your {userProfile.fitnessLevel} level training awaits
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Heart className="h-6 w-6 text-red-500 mr-2" />
            <h3 className="text-lg font-semibold">Fitness Goals</h3>
          </div>
          <div className="space-y-2">
            {userProfile.goals.map((goal, index) => (
              <div key={index} className="text-gray-600 flex items-center">
                <TrendingUp className="h-4 w-4 mr-2 text-indigo-500" />
                {goal}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Dumbbell className="h-6 w-6 text-indigo-500 mr-2" />
            <h3 className="text-lg font-semibold">Preferred Training</h3>
          </div>
          <div className="space-y-2">
            {userProfile.preferredCategories.map((category, index) => (
              <div key={index} className="text-gray-600 capitalize">
                {category}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Play className="h-6 w-6 text-green-500 mr-2" />
            <h3 className="text-lg font-semibold">Quick Stats</h3>
          </div>
          <div className="space-y-2">
            {userProfile.weight && (
              <div className="text-gray-600">Weight: {userProfile.weight} kg</div>
            )}
            {userProfile.height && (
              <div className="text-gray-600">Height: {userProfile.height} cm</div>
            )}
            {userProfile.age && (
              <div className="text-gray-600">Age: {userProfile.age} years</div>
            )}
          </div>
        </div>
      </div>

      {/* Recommended Workouts */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedExercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
              onClick={() => onExerciseSelect(exercise)}
            >
              <div className="aspect-video bg-gray-200 relative">
                <img
                  src={`https://source.unsplash.com/800x600/?fitness,${exercise.category}`}
                  alt={exercise.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute bottom-4 right-4 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700 transition-colors">
                  <Play className="h-6 w-6" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{exercise.name}</h3>
                <p className="text-gray-600 mt-1 line-clamp-2">{exercise.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
                  <span className="capitalize">{exercise.category}</span>
                  <span>{exercise.duration} min</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;