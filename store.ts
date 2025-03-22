import { create } from 'zustand';
import type { Exercise, UserProfile } from './types';

interface AppState {
  exercises: Exercise[];
  userProfile: UserProfile | null;
  currentSection: string;
  selectedExercise: Exercise | null;
  setExercises: (exercises: Exercise[]) => void;
  setUserProfile: (profile: UserProfile) => void;
  setCurrentSection: (section: string) => void;
  setSelectedExercise: (exercise: Exercise | null) => void;
}

export const useStore = create<AppState>((set) => ({
  exercises: [
    // Home Training Exercises
    {
      id: 'home-1',
      name: 'Full Body HIIT',
      description: 'High-intensity interval training that can be done at home with no equipment.',
      videoUrl: 'https://www.youtube.com/embed/ml6cT4AZdqI',
      category: 'home',
      difficulty: 'beginner',
      duration: 30,
      targetMuscles: ['Full Body', 'Core', 'Cardiovascular System'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Energy Boost',
            ingredients: ['Banana', 'Peanut Butter', 'Whole Grain Toast'],
            nutrients: { calories: 300, protein: 12, carbs: 45, fats: 12 },
            timing: '1 hour before'
          }
        ],
        postworkout: [
          {
            name: 'Recovery Shake',
            ingredients: ['Greek Yogurt', 'Mixed Berries', 'Honey', 'Chia Seeds'],
            nutrients: { calories: 250, protein: 20, carbs: 35, fats: 8 },
            timing: 'Within 30 minutes'
          }
        ],
        dailyCalories: 2200,
        macroSplit: { protein: 25, carbs: 55, fats: 20 }
      }
    },
    {
      id: 'home-2',
      name: 'Bodyweight Strength',
      description: 'Build strength using just your bodyweight with this comprehensive routine.',
      videoUrl: 'https://www.youtube.com/embed/oAPCPjnU1wA',
      category: 'home',
      difficulty: 'intermediate',
      duration: 45,
      targetMuscles: ['Chest', 'Back', 'Legs', 'Core'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Power Meal',
            ingredients: ['Oatmeal', 'Protein Powder', 'Banana', 'Almonds'],
            nutrients: { calories: 400, protein: 30, carbs: 50, fats: 14 },
            timing: '2 hours before'
          }
        ],
        postworkout: [
          {
            name: 'Muscle Recovery',
            ingredients: ['Chicken Breast', 'Brown Rice', 'Broccoli', 'Olive Oil'],
            nutrients: { calories: 450, protein: 35, carbs: 55, fats: 15 },
            timing: 'Within 1 hour'
          }
        ],
        dailyCalories: 2500,
        macroSplit: { protein: 30, carbs: 50, fats: 20 }
      }
    },
    {
      id: 'home-3',
      name: 'Yoga Flow',
      description: 'A calming yet challenging yoga sequence for strength and flexibility.',
      videoUrl: 'https://www.youtube.com/embed/v7AYKMP6rOE',
      category: 'home',
      difficulty: 'advanced',
      duration: 60,
      targetMuscles: ['Full Body', 'Core', 'Balance', 'Flexibility'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Light Energizer',
            ingredients: ['Green Tea', 'Apple', 'Almond Butter'],
            nutrients: { calories: 200, protein: 8, carbs: 25, fats: 12 },
            timing: '30 minutes before'
          }
        ],
        postworkout: [
          {
            name: 'Rejuvenation Bowl',
            ingredients: ['Quinoa', 'Avocado', 'Chickpeas', 'Mixed Greens'],
            nutrients: { calories: 350, protein: 15, carbs: 45, fats: 18 },
            timing: 'Within 1 hour'
          }
        ],
        dailyCalories: 2300,
        macroSplit: { protein: 20, carbs: 50, fats: 30 }
      }
    },
    // Strength Training Exercises
    {
      id: 'str-1',
      name: 'Barbell Squat',
      description: 'A compound exercise that targets the lower body muscles including quadriceps, hamstrings, and glutes.',
      videoUrl: 'https://www.youtube.com/embed/Uv_DKDl7EjA',
      category: 'strength',
      difficulty: 'intermediate',
      duration: 15,
      targetMuscles: ['Quadriceps', 'Hamstrings', 'Glutes', 'Core'],
      sets: 4,
      reps: 8,
      restPeriod: 90,
      dietRecommendations: {
        preworkout: [
          {
            name: 'Power Breakfast',
            ingredients: ['Oatmeal', 'Banana', 'Whey Protein', 'Almond Butter'],
            nutrients: { calories: 450, protein: 30, carbs: 65, fats: 12 },
            timing: '2 hours before'
          }
        ],
        postworkout: [
          {
            name: 'Recovery Shake',
            ingredients: ['Whey Protein', 'Dextrose', 'Creatine', 'BCAAs'],
            nutrients: { calories: 300, protein: 25, carbs: 45, fats: 2 },
            timing: 'Immediately after'
          }
        ],
        dailyCalories: 2800,
        macroSplit: { protein: 30, carbs: 50, fats: 20 }
      }
    },
    {
      id: 'str-2',
      name: 'Bench Press',
      description: 'The king of chest exercises, targeting chest, shoulders, and triceps.',
      videoUrl: 'https://www.youtube.com/embed/rT7DgCr-3pg',
      category: 'strength',
      difficulty: 'beginner',
      duration: 20,
      targetMuscles: ['Chest', 'Shoulders', 'Triceps'],
      sets: 3,
      reps: 10,
      restPeriod: 60,
      dietRecommendations: {
        preworkout: [
          {
            name: 'Energy Boost',
            ingredients: ['Toast', 'Eggs', 'Spinach'],
            nutrients: { calories: 300, protein: 20, carbs: 30, fats: 15 },
            timing: '1 hour before'
          }
        ],
        postworkout: [
          {
            name: 'Muscle Builder',
            ingredients: ['Greek Yogurt', 'Berries', 'Honey', 'Granola'],
            nutrients: { calories: 350, protein: 25, carbs: 45, fats: 8 },
            timing: 'Within 30 minutes'
          }
        ],
        dailyCalories: 2500,
        macroSplit: { protein: 25, carbs: 55, fats: 20 }
      }
    },
    {
      id: 'str-3',
      name: 'Advanced Deadlift',
      description: 'A powerful compound movement targeting the entire posterior chain.',
      videoUrl: 'https://www.youtube.com/embed/r4MzxtBKyNE',
      category: 'strength',
      difficulty: 'advanced',
      duration: 25,
      targetMuscles: ['Back', 'Glutes', 'Hamstrings', 'Core', 'Traps'],
      sets: 5,
      reps: 5,
      restPeriod: 120,
      dietRecommendations: {
        preworkout: [
          {
            name: 'Power Meal',
            ingredients: ['Sweet Potato', 'Chicken Breast', 'Rice', 'Avocado'],
            nutrients: { calories: 550, protein: 40, carbs: 65, fats: 20 },
            timing: '2-3 hours before'
          }
        ],
        postworkout: [
          {
            name: 'Recovery Plus',
            ingredients: ['Whey Isolate', 'Banana', 'Peanut Butter', 'Milk'],
            nutrients: { calories: 400, protein: 35, carbs: 50, fats: 12 },
            timing: 'Immediately after'
          }
        ],
        dailyCalories: 3000,
        macroSplit: { protein: 35, carbs: 45, fats: 20 }
      }
    },
    // Endurance Training Exercises
    {
      id: 'end-1',
      name: 'HIIT Sprint Intervals',
      description: 'High-intensity interval training combining sprints and recovery periods for maximum cardiovascular benefit.',
      videoUrl: 'https://www.youtube.com/embed/nrB_5K-zaag',
      category: 'endurance',
      difficulty: 'advanced',
      duration: 20,
      targetMuscles: ['Quadriceps', 'Calves', 'Hamstrings', 'Core', 'Cardiovascular System'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Energy Boost',
            ingredients: ['Sweet Potato', 'Greek Yogurt', 'Honey', 'Almonds'],
            nutrients: { calories: 350, protein: 20, carbs: 55, fats: 8 },
            timing: '1.5 hours before'
          }
        ],
        postworkout: [
          {
            name: 'Endurance Recovery',
            ingredients: ['Chocolate Milk', 'Banana', 'Peanut Butter'],
            nutrients: { calories: 380, protein: 20, carbs: 50, fats: 12 },
            timing: 'Within 30 minutes'
          }
        ],
        dailyCalories: 2500,
        macroSplit: { protein: 25, carbs: 55, fats: 20 }
      }
    },
    {
      id: 'end-2',
      name: 'Beginner Running Program',
      description: 'A structured running program perfect for beginners building endurance.',
      videoUrl: 'https://www.youtube.com/embed/--YwCqiZn4E',
      category: 'endurance',
      difficulty: 'beginner',
      duration: 30,
      targetMuscles: ['Legs', 'Core', 'Cardiovascular System'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Light Fuel',
            ingredients: ['Banana', 'Toast', 'Honey'],
            nutrients: { calories: 250, protein: 8, carbs: 45, fats: 5 },
            timing: '1 hour before'
          }
        ],
        postworkout: [
          {
            name: 'Basic Recovery',
            ingredients: ['Sports Drink', 'Energy Bar'],
            nutrients: { calories: 220, protein: 10, carbs: 40, fats: 3 },
            timing: 'Within 30 minutes'
          }
        ],
        dailyCalories: 2200,
        macroSplit: { protein: 20, carbs: 60, fats: 20 }
      }
    },
    // Stamina Building Exercises
    {
      id: 'stam-1',
      name: 'Circuit Training',
      description: 'Full-body circuit training to build muscular and cardiovascular stamina.',
      videoUrl: 'https://www.youtube.com/embed/TkaYafQ-XC4',
      category: 'stamina',
      difficulty: 'intermediate',
      duration: 45,
      targetMuscles: ['Full Body', 'Core', 'Cardiovascular System'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Stamina Fuel',
            ingredients: ['Quinoa', 'Chicken', 'Vegetables', 'Olive Oil'],
            nutrients: { calories: 400, protein: 30, carbs: 45, fats: 15 },
            timing: '2 hours before'
          }
        ],
        postworkout: [
          {
            name: 'Endurance Blend',
            ingredients: ['Protein Shake', 'Orange', 'Almonds'],
            nutrients: { calories: 300, protein: 25, carbs: 35, fats: 10 },
            timing: 'Within 30 minutes'
          }
        ],
        dailyCalories: 2600,
        macroSplit: { protein: 30, carbs: 50, fats: 20 }
      }
    },
    // Speed Training Exercises
    {
      id: 'speed-1',
      name: 'Agility Ladder Drills',
      description: 'Quick-feet drills to improve speed, agility, and coordination.',
      videoUrl: 'https://www.youtube.com/embed/iICTuTZCJyM',
      category: 'speed',
      difficulty: 'beginner',
      duration: 20,
      targetMuscles: ['Legs', 'Core', 'Cardiovascular System'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Quick Energy',
            ingredients: ['Rice Cakes', 'Banana', 'Honey'],
            nutrients: { calories: 200, protein: 5, carbs: 45, fats: 2 },
            timing: '1 hour before'
          }
        ],
        postworkout: [
          {
            name: 'Speed Recovery',
            ingredients: ['Protein Bar', 'Sports Drink'],
            nutrients: { calories: 250, protein: 15, carbs: 35, fats: 8 },
            timing: 'Immediately after'
          }
        ],
        dailyCalories: 2400,
        macroSplit: { protein: 25, carbs: 55, fats: 20 }
      }
    },
    // Plyometric Exercises
    {
      id: 'plyo-1',
      name: 'Box Jumps',
      description: 'Explosive jumping exercises to build power and athleticism.',
      videoUrl: 'https://www.youtube.com/embed/NBY9-kTuHEk',
      category: 'plyometric',
      difficulty: 'intermediate',
      duration: 25,
      targetMuscles: ['Quadriceps', 'Calves', 'Glutes', 'Core'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Power Fuel',
            ingredients: ['Oatmeal', 'Protein Powder', 'Banana', 'Honey'],
            nutrients: { calories: 350, protein: 25, carbs: 50, fats: 8 },
            timing: '1.5 hours before'
          }
        ],
        postworkout: [
          {
            name: 'Jump Recovery',
            ingredients: ['Chocolate Milk', 'Protein Bar'],
            nutrients: { calories: 300, protein: 20, carbs: 40, fats: 10 },
            timing: 'Within 30 minutes'
          }
        ],
        dailyCalories: 2700,
        macroSplit: { protein: 30, carbs: 50, fats: 20 }
      }
    },
    // Stretching Exercises
    {
      id: 'str-1',
      name: 'Dynamic Stretching Routine',
      description: 'A comprehensive stretching routine focusing on mobility and flexibility.',
      videoUrl: 'https://www.youtube.com/embed/zcTPh6G8DoE',
      category: 'stretch',
      difficulty: 'beginner',
      duration: 15,
      targetMuscles: ['Full Body', 'Hip Flexors', 'Hamstrings', 'Shoulders'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Light Snack',
            ingredients: ['Apple', 'Almond Butter'],
            nutrients: { calories: 200, protein: 7, carbs: 25, fats: 10 },
            timing: '30 minutes before'
          }
        ],
        postworkout: [
          {
            name: 'Hydration Plus',
            ingredients: ['Coconut Water', 'Lemon', 'Himalayan Salt'],
            nutrients: { calories: 60, protein: 0, carbs: 15, fats: 0 },
            timing: 'Immediately after'
          }
        ],
        dailyCalories: 2000,
        macroSplit: { protein: 20, carbs: 50, fats: 30 }
      }
    },
    {
      id: 'str-2',
      name: 'Advanced Yoga Flow',
      description: 'Advanced yoga sequence combining strength, balance, and flexibility.',
      videoUrl: 'https://www.youtube.com/embed/9kOCY0KNByw',
      category: 'stretch',
      difficulty: 'advanced',
      duration: 60,
      targetMuscles: ['Full Body', 'Core', 'Balance', 'Flexibility'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Yoga Prep',
            ingredients: ['Green Tea', 'Dates', 'Almonds'],
            nutrients: { calories: 150, protein: 5, carbs: 20, fats: 8 },
            timing: '1 hour before'
          }
        ],
        postworkout: [
          {
            name: 'Recovery Blend',
            ingredients: ['Smoothie Bowl', 'Chia Seeds', 'Berries'],
            nutrients: { calories: 280, protein: 12, carbs: 35, fats: 12 },
            timing: 'Within 1 hour'
          }
        ],
        dailyCalories: 2200,
        macroSplit: { protein: 20, carbs: 45, fats: 35 }
      }
    },
    {
      id: 'stam-2',
      name: 'Tabata Intervals',
      description: 'High-intensity interval training with 20 seconds work and 10 seconds rest.',
      videoUrl: 'https://www.youtube.com/embed/XIeCMhNWFQQ',
      category: 'stamina',
      difficulty: 'advanced',
      duration: 30,
      targetMuscles: ['Full Body', 'Core', 'Cardiovascular System'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Energy Complex',
            ingredients: ['Brown Rice', 'Lean Turkey', 'Sweet Potato'],
            nutrients: { calories: 450, protein: 35, carbs: 55, fats: 12 },
            timing: '2 hours before'
          }
        ],
        postworkout: [
          {
            name: 'Recovery Max',
            ingredients: ['BCAA Drink', 'Banana', 'Protein Bar'],
            nutrients: { calories: 320, protein: 25, carbs: 45, fats: 8 },
            timing: 'Immediately after'
          }
        ],
        dailyCalories: 2800,
        macroSplit: { protein: 30, carbs: 50, fats: 20 }
      }
    },
    {
      id: 'plyo-2',
      name: 'Depth Jumps',
      description: 'Advanced plyometric exercise for explosive power development.',
      videoUrl: 'https://www.youtube.com/embed/hGvyEg4_v30',
      category: 'plyometric',
      difficulty: 'advanced',
      duration: 20,
      targetMuscles: ['Quadriceps', 'Calves', 'Glutes', 'Core'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Power Complex',
            ingredients: ['Rice', 'Chicken Breast', 'Vegetables'],
            nutrients: { calories: 400, protein: 30, carbs: 50, fats: 10 },
            timing: '2 hours before'
          }
        ],
        postworkout: [
          {
            name: 'Recovery Plus',
            ingredients: ['Whey Protein', 'Maltodextrin', 'BCAAs'],
            nutrients: { calories: 300, protein: 25, carbs: 40, fats: 5 },
            timing: 'Within 30 minutes'
          }
        ],
        dailyCalories: 2600,
        macroSplit: { protein: 30, carbs: 50, fats: 20 }
      }
    },
    {
      id: 'plyo-3',
      name: 'Medicine Ball Throws',
      description: 'Dynamic power development using medicine ball exercises.',
      videoUrl: 'https://www.youtube.com/embed/6FxzXB0kdk0',
      category: 'plyometric',
      difficulty: 'beginner',
      duration: 25,
      targetMuscles: ['Core', 'Shoulders', 'Chest', 'Back'],
      dietRecommendations: {
        preworkout: [
          {
            name: 'Energy Boost',
            ingredients: ['Banana', 'Peanut Butter', 'Toast'],
            nutrients: { calories: 300, protein: 15, carbs: 45, fats: 12 },
            timing: '1 hour before'
          }
        ],
        postworkout: [
          {
            name: 'Basic Recovery',
            ingredients: ['Protein Shake', 'Apple'],
            nutrients: { calories: 250, protein: 20, carbs: 35, fats: 5 },
            timing: 'Within 30 minutes'
          }
        ],
        dailyCalories: 2400,
        macroSplit: { protein: 25, carbs: 55, fats: 20 }
      }
    }
  ],
  userProfile: null,
  currentSection: 'Home',
  selectedExercise: null,
  setExercises: (exercises) => set({ exercises }),
  setUserProfile: (profile) => set({ userProfile: profile }),
  setCurrentSection: (section) => set({ currentSection: section }),
  setSelectedExercise: (exercise) => set({ selectedExercise: exercise })
}));