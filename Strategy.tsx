import React from 'react';
import { Target, AlertCircle, TrendingUp, Lightbulb } from 'lucide-react';
import type { Exercise } from '../types';

interface StrategyProps {
  exercise: Exercise;
}

const Strategy: React.FC<StrategyProps> = ({ exercise }) => {
  if (!exercise.strategy) return null;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Strategy Overview</h3>
        <p className="text-gray-700">{exercise.strategy.overview}</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Target className="h-5 w-5 mr-2 text-indigo-600" />
          Key Points
        </h3>
        <ul className="space-y-2">
          {exercise.strategy.keyPoints.map((point, index) => (
            <li key={index} className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Lightbulb className="h-5 w-5 mr-2 text-indigo-600" />
          Techniques
        </h3>
        <div className="space-y-6">
          {exercise.strategy.techniques.map((technique, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-lg mb-2">{technique.name}</h4>
              <p className="text-gray-700 mb-3">{technique.description}</p>
              
              <div className="space-y-3">
                <div>
                  <h5 className="font-medium text-sm text-gray-600 mb-1">Benefits:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {technique.benefits.map((benefit, i) => (
                      <li key={i} className="text-gray-700">{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="font-medium text-sm text-gray-600 mb-1">Key Cues:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {technique.cues.map((cue, i) => (
                      <li key={i} className="text-gray-700">{cue}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <AlertCircle className="h-5 w-5 mr-2 text-indigo-600" />
          Common Mistakes to Avoid
        </h3>
        <ul className="space-y-2">
          {exercise.strategy.commonMistakes.map((mistake, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <span className="text-red-500 mr-2">•</span>
              {mistake}
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <TrendingUp className="h-5 w-5 mr-2 text-indigo-600" />
          Progression Path
        </h3>
        <div className="space-y-3">
          {exercise.strategy.progressionPath.map((step, index) => (
            <div
              key={index}
              className="flex items-center space-x-3"
            >
              <span className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-medium">
                {index + 1}
              </span>
              <span className="text-gray-700">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Strategy;