import { DailyStats } from '../data/mockData';

interface StatsCardsProps {
  stats: DailyStats;
}

const StatsCards = ({ stats }: StatsCardsProps) => {
  const statsData = [
    {
      id: 'calories',
      title: 'Calories',
      value: Math.round(stats.calories),
      unit: 'kcal',
      target: stats.target_calories,
      color: 'green',
      testId: 'calories-card',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 'protein',
      title: 'Protein',
      value: Math.round(stats.protein),
      unit: 'g',
      target: Math.round(stats.target_calories * 0.15 / 4), // 15% of calories from protein
      color: 'blue',
      testId: 'protein-card',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    },
    {
      id: 'carbs',
      title: 'Carbs',
      value: Math.round(stats.carbs),
      unit: 'g',
      target: Math.round(stats.target_calories * 0.45 / 4), // 45% of calories from carbs
      color: 'yellow',
      testId: 'carbs-card',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      )
    },
    {
      id: 'fat',
      title: 'Fat',
      value: Math.round(stats.fat),
      unit: 'g',
      target: Math.round(stats.target_calories * 0.30 / 9), // 30% of calories from fat
      color: 'purple',
      testId: 'fat-card',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: {
        bg: 'bg-green-100',
        text: 'text-green-600',
        border: 'border-green-200'
      },
      blue: {
        bg: 'bg-blue-100',
        text: 'text-blue-600',
        border: 'border-blue-200'
      },
      yellow: {
        bg: 'bg-yellow-100',
        text: 'text-yellow-600',
        border: 'border-yellow-200'
      },
      purple: {
        bg: 'bg-purple-100',
        text: 'text-purple-600',
        border: 'border-purple-200'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((stat) => {
        const colors = getColorClasses(stat.color);
        const progressPercentage = Math.min((stat.value / stat.target) * 100, 100);
        
        return (
          <div
            key={stat.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            data-testid={stat.testId}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`${colors.bg} ${colors.text} p-2 rounded-lg`}>
                {stat.icon}
              </div>
              <span className="text-xs text-gray-500 uppercase tracking-wide">
                {stat.title}
              </span>
            </div>
            
            <div className="mb-3">
              <div className="flex items-baseline space-x-1">
                <span
                  className={`text-3xl font-bold ${colors.text}`}
                  data-testid="stat-value"
                >
                  {stat.value}
                </span>
                <span className="text-sm text-gray-500">{stat.unit}</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                of {stat.target}{stat.unit} target
              </p>
            </div>

            {/* Progress Bar */}
            <div className="relative">
              <div className={`w-full bg-gray-200 rounded-full h-2`}>
                <div
                  className={`${colors.text.replace('text-', 'bg-')} h-2 rounded-full transition-all duration-500 ease-in-out`}
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-xs text-gray-400">
                  {Math.round(progressPercentage)}%
                </span>
                <span className={`text-xs ${progressPercentage >= 100 ? 'text-orange-500' : 'text-gray-400'}`}>
                  {progressPercentage >= 100 ? 'Over target' : 'On track'}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards; 