export interface Food {
  id: string;
  name: string;
  calories_per_100g: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface FoodLogEntry {
  id: string;
  food: Food;
  quantity: number; // in grams
  meal_type: 'breakfast' | 'lunch' | 'dinner' | 'snacks';
  calories: number;
  date: string;
}

export interface DailyStats {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  target_calories: number;
}

export const mockFoods: Food[] = [
  {
    id: '1',
    name: 'Banana',
    calories_per_100g: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3
  },
  {
    id: '2',
    name: 'Chicken Breast',
    calories_per_100g: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6
  },
  {
    id: '3',
    name: 'Brown Rice',
    calories_per_100g: 112,
    protein: 2.6,
    carbs: 22,
    fat: 0.9
  },
  {
    id: '4',
    name: 'Greek Yogurt',
    calories_per_100g: 97,
    protein: 10,
    carbs: 3.6,
    fat: 5
  },
  {
    id: '5',
    name: 'Almonds',
    calories_per_100g: 576,
    protein: 21,
    carbs: 22,
    fat: 49
  },
  {
    id: '6',
    name: 'Broccoli',
    calories_per_100g: 25,
    protein: 3,
    carbs: 5,
    fat: 0.4
  },
  {
    id: '7',
    name: 'Eggs',
    calories_per_100g: 155,
    protein: 13,
    carbs: 1.1,
    fat: 11
  },
  {
    id: '8',
    name: 'Oatmeal',
    calories_per_100g: 68,
    protein: 2.4,
    carbs: 12,
    fat: 1.4
  },
  {
    id: '9',
    name: 'Salmon',
    calories_per_100g: 208,
    protein: 25,
    carbs: 0,
    fat: 12
  },
  {
    id: '10',
    name: 'Avocado',
    calories_per_100g: 160,
    protein: 2,
    carbs: 9,
    fat: 15
  }
];

export const mockDailyLog: FoodLogEntry[] = [
  // Breakfast
  {
    id: 'log1',
    food: mockFoods[6], // Eggs
    quantity: 150, // 2 eggs
    meal_type: 'breakfast',
    calories: 233,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 'log2',
    food: mockFoods[7], // Oatmeal
    quantity: 100,
    meal_type: 'breakfast',
    calories: 68,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 'log3',
    food: mockFoods[0], // Banana
    quantity: 120,
    meal_type: 'breakfast',
    calories: 107,
    date: new Date().toISOString().split('T')[0]
  },

  // Lunch
  {
    id: 'log4',
    food: mockFoods[1], // Chicken Breast
    quantity: 150,
    meal_type: 'lunch',
    calories: 248,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 'log5',
    food: mockFoods[2], // Brown Rice
    quantity: 100,
    meal_type: 'lunch',
    calories: 112,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 'log6',
    food: mockFoods[5], // Broccoli
    quantity: 150,
    meal_type: 'lunch',
    calories: 38,
    date: new Date().toISOString().split('T')[0]
  },

  // Dinner
  {
    id: 'log7',
    food: mockFoods[8], // Salmon
    quantity: 150,
    meal_type: 'dinner',
    calories: 312,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 'log8',
    food: mockFoods[9], // Avocado
    quantity: 100,
    meal_type: 'dinner',
    calories: 160,
    date: new Date().toISOString().split('T')[0]
  },

  // Snacks
  {
    id: 'log9',
    food: mockFoods[3], // Greek Yogurt
    quantity: 150,
    meal_type: 'snacks',
    calories: 146,
    date: new Date().toISOString().split('T')[0]
  },
  {
    id: 'log10',
    food: mockFoods[4], // Almonds
    quantity: 25,
    meal_type: 'snacks',
    calories: 144,
    date: new Date().toISOString().split('T')[0]
  }
];

export const calculateDailyStats = (foodLog: FoodLogEntry[]): DailyStats => {
  const totals = foodLog.reduce(
    (acc, entry) => {
      const multiplier = entry.quantity / 100;
      return {
        calories: acc.calories + entry.calories,
        protein: acc.protein + (entry.food.protein * multiplier),
        carbs: acc.carbs + (entry.food.carbs * multiplier),
        fat: acc.fat + (entry.food.fat * multiplier)
      };
    },
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );

  return {
    ...totals,
    target_calories: 2000 // Mock target
  };
};

export const mockDailyStats = calculateDailyStats(mockDailyLog); 