import React from 'react';
import Navigation from './components/Navigation';
import WorkoutCard from './components/WorkoutCard';
import ExerciseModal from './components/ExerciseModal';
import UserProfileForm from './components/UserProfileForm';
import HomePage from './components/HomePage';
import DietChart from './components/DietChart';
import { useStore } from './store';

function App() {
  const {
    exercises,
    userProfile,
    currentSection,
    selectedExercise,
    setUserProfile,
    setCurrentSection,
    setSelectedExercise
  } = useStore();

  const handleProfileSubmit = (profile: typeof userProfile) => {
    setUserProfile(profile);
  };

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
        <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Fit Mentor</h1>
            <p className="text-lg text-gray-600">Let's personalize your experience</p>
          </div>
          <UserProfileForm onSubmit={handleProfileSubmit} />
        </main>
      </div>
    );
  }

  if (currentSection === 'Home') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
        <HomePage userProfile={userProfile} onExerciseSelect={setSelectedExercise} />
        {selectedExercise && (
          <ExerciseModal
            exercise={selectedExercise}
            onClose={() => setSelectedExercise(null)}
          />
        )}
      </div>
    );
  }

  if (currentSection === 'Diet') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
        <DietChart />
      </div>
    );
  }

  const filteredExercises = exercises.filter(
    (exercise) =>
      exercise.category === currentSection.toLowerCase() &&
      exercise.difficulty === userProfile.fitnessLevel
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation currentSection={currentSection} onSectionChange={setCurrentSection} />
      
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{currentSection} Training</h1>
          <p className="mt-2 text-gray-600">
            Discover personalized {currentSection.toLowerCase()} workouts tailored to your fitness level
          </p>
        </div>

        {filteredExercises.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">
              No exercises available for your current fitness level in this category.
              Try changing your fitness level or exploring other categories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExercises.map((exercise) => (
              <WorkoutCard
                key={exercise.id}
                exercise={exercise}
                onSelect={setSelectedExercise}
              />
            ))}
          </div>
        )}
      </main>

      {selectedExercise && (
        <ExerciseModal
          exercise={selectedExercise}
          onClose={() => setSelectedExercise(null)}
        />
      )}
    </div>
  );
}

export default App;