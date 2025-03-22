import React from 'react';
import type { UserProfile } from '../types';

interface UserProfileFormProps {
  onSubmit: (profile: UserProfile) => void;
}

const UserProfileForm: React.FC<UserProfileFormProps> = ({ onSubmit }) => {
  const [profile, setProfile] = React.useState<UserProfile>({
    fitnessLevel: 'beginner',
    goals: [],
    preferredCategories: [],
    weight: undefined,
    height: undefined,
    age: undefined,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(profile);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Create Your Profile</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Weight (kg)</label>
          <input
            type="number"
            value={profile.weight || ''}
            onChange={(e) => setProfile({ ...profile, weight: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Height (cm)</label>
          <input
            type="number"
            value={profile.height || ''}
            onChange={(e) => setProfile({ ...profile, height: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="number"
            value={profile.age || ''}
            onChange={(e) => setProfile({ ...profile, age: Number(e.target.value) })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Fitness Level
        </label>
        <select
          value={profile.fitnessLevel}
          onChange={(e) =>
            setProfile({ ...profile, fitnessLevel: e.target.value as any })
          }
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Fitness Goals
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            'Build Muscle',
            'Lose Weight',
            'Improve Endurance',
            'Increase Flexibility',
            'Enhance Performance',
            'Build Strength',
          ].map((goal) => (
            <label key={goal} className="flex items-center p-2 bg-gray-50 rounded-md">
              <input
                type="checkbox"
                checked={profile.goals.includes(goal)}
                onChange={(e) => {
                  const goals = e.target.checked
                    ? [...profile.goals, goal]
                    : profile.goals.filter((g) => g !== goal);
                  setProfile({ ...profile, goals });
                }}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">{goal}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Training Categories
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            'strength',
            'endurance',
            'stamina',
            'speed',
            'plyometric',
            'stretch'
          ].map((category) => (
            <label key={category} className="flex items-center p-2 bg-gray-50 rounded-md">
              <input
                type="checkbox"
                checked={profile.preferredCategories.includes(category as any)}
                onChange={(e) => {
                  const categories = e.target.checked
                    ? [...profile.preferredCategories, category as any]
                    : profile.preferredCategories.filter((c) => c !== category);
                  setProfile({ ...profile, preferredCategories: categories });
                }}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700 capitalize">{category}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save Profile
      </button>
    </form>
  );
};

export default UserProfileForm