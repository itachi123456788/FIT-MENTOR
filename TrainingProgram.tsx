import React from 'react';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import type { Exercise } from '../types';

interface TrainingProgramProps {
  exercise: Exercise;
}

const TrainingProgram: React.FC<TrainingProgramProps> = ({ exercise }) => {
  if (!exercise.trainingProgram) return null;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-indigo-600" />
          {exercise.trainingProgram.name}
        </h3>
        <div className="space-y-4">
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-2" />
            Duration: {exercise.trainingProgram.duration}
          </div>
          <div>
            <h4 className="font-medium mb-2">Equipment Needed:</h4>
            <div className="flex flex-wrap gap-2">
              {exercise.trainingProgram.equipmentNeeded.map((item, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Weekly Schedule</h3>
        <div className="space-y-6">
          {exercise.trainingProgram.schedule.map((day, index) => (
            <div key={index} className="border-b pb-4 last:border-b-0 last:pb-0">
              <h4 className="font-medium text-lg mb-2">
                {day.day} - {day.focus}
              </h4>
              <div className="space-y-3">
                {day.exercises.map((ex, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-medium">{ex.name}</h5>
                        <p className="text-sm text-gray-600">
                          {ex.sets} sets × {ex.reps} | Intensity: {ex.intensity}
                        </p>
                      </div>
                      {ex.notes && (
                        <div className="text-sm text-gray-500 italic">
                          {ex.notes}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-semibold mb-4">Progression Strategy</h3>
        <p className="text-gray-700">{exercise.trainingProgram.progressionStrategy}</p>
      </div>
    </div>
  );
};

export default TrainingProgram;