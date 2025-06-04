interface CalorieProgressProps {
  currentCalories: number;
  targetCalories: number;
}

const CalorieProgress = ({ currentCalories, targetCalories }: CalorieProgressProps) => {
  const progressPercentage = Math.min((currentCalories / targetCalories) * 100, 100);
  const remaining = Math.max(targetCalories - currentCalories, 0);

  return (
    <div className="bg-white rounded-lg shadow-md p-6" data-testid="calorie-progress">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Daily Calories</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">
            <span data-testid="current-calories" className="font-semibold text-green-600">
              {Math.round(currentCalories)}
            </span>
            {' / '}
            <span data-testid="target-calories" className="font-semibold">
              {targetCalories}
            </span>
          </span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
          <div
            className="bg-gradient-to-r from-green-400 to-green-600 h-4 rounded-full transition-all duration-500 ease-in-out"
            style={{ width: `${progressPercentage}%` }}
            data-testid="progress-fill"
          />
        </div>
        
        {/* Progress Labels */}
        <div className="flex justify-between text-sm text-gray-600">
          <span>0</span>
          <span className="font-semibold text-green-600">
            {Math.round(progressPercentage)}%
          </span>
          <span>{targetCalories}</span>
        </div>
      </div>

      {/* Status Message */}
      <div className="mt-4 text-center">
        {currentCalories >= targetCalories ? (
          <p className="text-orange-600 font-medium">
            Target reached! You've consumed {Math.round(currentCalories - targetCalories)} calories over your goal.
          </p>
        ) : (
          <p className="text-gray-600">
            <span className="font-semibold text-green-600">{remaining}</span> calories remaining
          </p>
        )}
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
        <div className="text-center">
          <p className="text-2xl font-bold text-green-600">
            {Math.round(currentCalories)}
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Consumed</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-600">
            {remaining}
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Remaining</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-purple-600">
            {targetCalories}
          </p>
          <p className="text-xs text-gray-500 uppercase tracking-wide">Goal</p>
        </div>
      </div>
    </div>
  );
};

export default CalorieProgress; 