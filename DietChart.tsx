import React from 'react';
import { Calendar, Clock, Utensils } from 'lucide-react';
import { useStore } from '../store';
import type { Exercise } from '../types';

const DietChart: React.FC = () => {
  const { exercises, userProfile } = useStore();
  const [selectedCategory, setSelectedCategory] = React.useState<string>('all');

  const categories = ['all', ...new Set(exercises.map(ex => ex.category))];
  
  const filteredExercises = selectedCategory === 'all' 
    ? exercises
    : exercises.filter(ex => ex.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Nutrition Guide</h1>
        <p className="text-gray-600">
          Personalized diet recommendations based on your fitness level and training type
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Daily Calorie Calculator */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
          Daily Calorie Requirements
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredExercises.map(exercise => (
            <div key={exercise.id} className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-medium text-lg mb-2 capitalize">{exercise.name}</h3>
              <div className="space-y-2">
                <p className="text-gray-600">
                  Daily Calories: {exercise.dietRecommendations.dailyCalories} kcal
                </p>
                <div className="flex gap-2">
                  <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                    Protein: {exercise.dietRecommendations.macroSplit.protein}%
                  </span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Carbs: {exercise.dietRecommendations.macroSplit.carbs}%
                  </span>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Fats: {exercise.dietRecommendations.macroSplit.fats}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Meal Plans */}
      <div className="space-y-8">
        {filteredExercises.map(exercise => (
          <div key={exercise.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4 capitalize">{exercise.name} Meal Plan</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pre-workout Meals */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                    Pre-workout Nutrition
                  </h3>
                  {exercise.dietRecommendations.preworkout.map((meal, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{meal.name}</h4>
                        <span className="text-sm text-gray-500">{meal.timing}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Utensils className="h-4 w-4 mr-2 text-gray-400" />
                          <div className="text-sm text-gray-600">
                            {meal.ingredients.join(', ')}
                          </div>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Nutrients: </span>
                          {meal.nutrients.calories} kcal | 
                          P: {meal.nutrients.protein}g | 
                          C: {meal.nutrients.carbs}g | 
                          F: {meal.nutrients.fats}g
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Post-workout Meals */}
                <div>
                  <h3 className="text-lg font-medium mb-4 flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                    Post-workout Nutrition
                  </h3>
                  {exercise.dietRecommendations.postworkout.map((meal, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg p-4 mb-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{meal.name}</h4>
                        <span className="text-sm text-gray-500">{meal.timing}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Utensils className="h-4 w-4 mr-2 text-gray-400" />
                          <div className="text-sm text-gray-600">
                            {meal.ingredients.join(', ')}
                          </div>
                        </div>
                        <div className="text-sm">
                          <span className="font-medium">Nutrients: </span>
                          {meal.nutrients.calories} kcal | 
                          P: {meal.nutrients.protein}g | 
                          C: {meal.nutrients.carbs}g | 
                          F: {meal.nutrients.fats}g
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DietChart;