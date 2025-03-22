export interface Exercise {
  id: string;
  name: string;
  description: string;
  videoUrl: string;
  category: WorkoutCategory;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  targetMuscles: string[];
  dietRecommendations: DietPlan;
  trainingProgram?: TrainingProgram;
  strategy?: Strategy;
  sets?: number;
  reps?: number;
  restPeriod?: number; // in seconds
}

export interface DietPlan {
  preworkout: Meal[];
  postworkout: Meal[];
  dailyCalories: number;
  macroSplit: {
    protein: number; // percentage
    carbs: number;
    fats: number;
  };
}

export interface Meal {
  name: string;
  ingredients: string[];
  nutrients: {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
  };
  timing: string;
}

export interface TrainingProgram {
  name: string;
  duration: string;
  schedule: TrainingDay[];
  progressionStrategy: string;
  equipmentNeeded: string[];
}

export interface TrainingDay {
  day: string;
  focus: string;
  exercises: ProgramExercise[];
}

export interface ProgramExercise {
  name: string;
  sets: number;
  reps: string;
  intensity: string;
  notes?: string;
}

export interface Strategy {
  overview: string;
  keyPoints: string[];
  techniques: Technique[];
  commonMistakes: string[];
  progressionPath: string[];
}

export interface Technique {
  name: string;
  description: string;
  benefits: string[];
  cues: string[];
}

export type WorkoutCategory = 
  | 'strength'
  | 'endurance'
  | 'stamina'
  | 'speed'
  | 'plyometric'
  | 'stretch'
  | 'home';

export interface UserProfile {
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  goals: string[];
  preferredCategories: WorkoutCategory[];
  weight?: number;
  height?: number;
  age?: number;
}