import React from 'react';
import { X, Clock, Dumbbell, Timer, Book, Target } from 'lucide-react';
import type { Exercise } from '../types';
import TrainingProgram from './TrainingProgram';
import Strategy from './Strategy';

interface ExerciseModalProps {
  exercise: Exercise;
  onClose: () => void;
}

const ExerciseModal: React.FC<ExerciseModalProps> = ({ exercise, onClose }) => {
  const [activeTab, setActiveTab] = React.useState<'overview' | 'diet' | 'program' | 'strategy'>('overview');

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-900">{exercise.name}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="border-b">
          <div className="flex">
            <button
              className={`px-4 py-2 font-medium flex items-center ${
                activeTab === 'overview'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('overview')}
            >
              <Book className="h-4 w-4 mr-2" />
              Overview
            </button>
            <button
              className={`px-4 py-2 font-medium flex items-center ${
                activeTab === 'diet'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('diet')}
            >
              <Timer className="h-4 w-4 mr-2" />
              Diet Plan
            </button>
            <button
              className={`px-4 py-2 font-medium flex items-center ${
                activeTab === 'program'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('program')}
            >
              <Dumbbell className="h-4 w-4 mr-2" />
              Training Program
            </button>
            <button
              className={`px-4 py-2 font-medium flex items-center ${
                activeTab === 'strategy'
                  ? 'border-b-2 border-indigo-500 text-indigo-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
              onClick={() => setActiveTab('strategy')}
            >
              <Target className="h-4 w-4 mr-2" />
              Strategy
            </button>
          </div>
        </div>

        <div className="p-4">
          {activeTab === 'overview' && (
            <>
              <div className="aspect-video w-full mb-4">
                <iframe
                  src={exercise.videoUrl}
                  title={exercise.name}
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Description</h3>
                    <p className="text-gray-600">{exercise.description}</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Target Muscles</h3>
                    <div className="flex flex-wrap gap-2">
                      {exercise.targetMuscles.map((muscle) => (
                        <span
                          key={muscle}
                          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                        >
                          {muscle}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Workout Details</h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div className="flex items-center">
                        <Clock className="h-5 w-5 text-gray-400 mr-2" />
                        <span>Duration: {exercise.duration} minutes</span>
                      </div>
                      {exercise.sets && exercise.reps && (
                        <div className="flex items-center">
                          <Dumbbell className="h-5 w-5 text-gray-400 mr-2" />
                          <span>{exercise.sets} sets × {exercise.reps} reps</span>
                        </div>
                      )}
                      {exercise.restPeriod && (
                        <div className="flex items-center">
                          <Timer className="h-5 w-5 text-gray-400 mr-2" />
                          <span>Rest: {exercise.restPeriod} seconds</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'diet' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Nutrition Guidelines</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-medium text-indigo-600">
                        {exercise.dietRecommendations.macroSplit.protein}%
                      </div>
                      <div className="text-sm text-gray-500">Protein</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-indigo-600">
                        {exercise.dietRecommendations.macroSplit.carbs}%
                      </div>
                      <div className="text-sm text-gray-500">Carbs</div>
                    </div>
                    <div>
                      <div className="text-lg font-medium text-indigo-600">
                        {exercise.dietRecommendations.macroSplit.fats}%
                      </div>
                      <div className="text-sm text-gray-500">Fats</div>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <div className="text-sm text-gray-500">Daily Calories</div>
                    <div className="text-lg font-medium text-indigo-600">
                      {exercise.dietRecommendations.dailyCalories} kcal
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-lg mb-3">Pre-Workout Meal</h4>
                  {exercise.dietRecommendations.preworkout.map((meal, index) => (
                    <div key={index} className="bg-white rounded-lg border p-4">
                      <div className="font-medium text-gray-900">{meal.name}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        Timing: {meal.timing}
                      </div>
                      <div className="mt-2">
                        <div className="text-sm font-medium text-gray-700">Ingredients:</div>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {meal.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        {meal.nutrients.calories} kcal | P: {meal.nutrients.protein}g | 
                        C: {meal.nutrients.carbs}g | F: {meal.nutrients.fats}g
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h4 className="font-medium text-lg mb-3">Post-Workout Meal</h4>
                  {exercise.dietRecommendations.postworkout.map((meal, index) => (
                    <div key={index} className="bg-white rounded-lg border p-4">
                      <div className="font-medium text-gray-900">{meal.name}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        Timing: {meal.timing}
                      </div>
                      <div className="mt-2">
                        <div className="text-sm font-medium text-gray-700">Ingredients:</div>
                        <ul className="list-disc list-inside text-sm text-gray-600">
                          {meal.ingredients.map((ingredient, i) => (
                            <li key={i}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        {meal.nutrients.calories} kcal | P: {meal.nutrients.protein}g | 
                        C: {meal.nutrients.carbs}g | F: {meal.nutrients.fats}g
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'program' && <TrainingProgram exercise={exercise} />}
          {activeTab === 'strategy' && <Strategy exercise={exercise} />}
        </div>
      </div>
    </div>
  );
};

export default ExerciseModal;