import { FoodLogEntry } from '../data/mockData';

interface DailyFoodLogProps {
  foodLog: FoodLogEntry[];
}

const DailyFoodLog = ({ foodLog }: DailyFoodLogProps) => {
  const mealTypes = [
    { 
      key: 'breakfast' as const, 
      title: 'Breakfast', 
      icon: '🌅',
      testId: 'breakfast-meals'
    },
    { 
      key: 'lunch' as const, 
      title: 'Lunch', 
      icon: '☀️',
      testId: 'lunch-meals'
    },
    { 
      key: 'dinner' as const, 
      title: 'Dinner', 
      icon: '🌙',
      testId: 'dinner-meals'
    },
    { 
      key: 'snacks' as const, 
      title: 'Snacks', 
      icon: '🍎',
      testId: 'snacks-meals'
    }
  ];

  const groupedMeals = mealTypes.map(mealType => ({
    ...mealType,
    meals: foodLog.filter(entry => entry.meal_type === mealType.key),
    totalCalories: foodLog
      .filter(entry => entry.meal_type === mealType.key)
      .reduce((sum, entry) => sum + entry.calories, 0)
  }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6" data-testid="daily-food-log">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Today's Food Log</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
          <button className="text-green-600 hover:text-green-700 transition duration-300">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {groupedMeals.map((mealGroup) => (
          <div key={mealGroup.key} data-testid={mealGroup.testId}>
            {/* Meal Type Header */}
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-lg">{mealGroup.icon}</span>
                <h3 className="text-lg font-semibold text-gray-800">{mealGroup.title}</h3>
                <span className="text-sm text-gray-500">
                  ({mealGroup.meals.length} item{mealGroup.meals.length !== 1 ? 's' : ''})
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-semibold text-green-600">
                  {Math.round(mealGroup.totalCalories)} cal
                </span>
                <button className="text-green-600 hover:text-green-700 transition duration-300 p-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Food Items */}
            {mealGroup.meals.length > 0 ? (
              <div className="space-y-2 ml-8">
                {mealGroup.meals.map((entry) => (
                  <div
                    key={entry.id}
                    className="flex justify-between items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300"
                    data-testid="food-item"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-3">
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-800" data-testid="food-name">
                            {entry.food.name}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {entry.quantity}g
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-gray-800" data-testid="food-calories">
                            {Math.round(entry.calories)} cal
                          </p>
                          <p className="text-xs text-gray-500">
                            P: {Math.round((entry.food.protein * entry.quantity) / 100)}g |{' '}
                            C: {Math.round((entry.food.carbs * entry.quantity) / 100)}g |{' '}
                            F: {Math.round((entry.food.fat * entry.quantity) / 100)}g
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button className="text-blue-600 hover:text-blue-700 transition duration-300 p-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                      </button>
                      <button className="text-red-600 hover:text-red-700 transition duration-300 p-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="ml-8 p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
                <p className="text-gray-500 text-center">
                  No {mealGroup.title.toLowerCase()} logged yet
                </p>
                <button className="w-full mt-2 text-green-600 hover:text-green-700 transition duration-300 text-sm">
                  + Add {mealGroup.title.toLowerCase()}
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quick Add Section */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 flex items-center justify-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <span>Add Food</span>
        </button>
      </div>
    </div>
  );
};

export default DailyFoodLog; 