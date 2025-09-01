import React from 'react';
import { Card } from '../ui/Card';
import { BeakerIcon } from '@heroicons/react/24/outline';
import { Nutrition } from '@/types/product';

interface NutritionCardProps {
  nutrition: Nutrition;
}

export const NutritionCard: React.FC<NutritionCardProps> = ({ nutrition }) => {
  // Don't render if nutrition data is empty
  if (!nutrition || Object.keys(nutrition).length === 0) {
    return null;
  }

  const nutritionEntries = Object.entries(nutrition).filter(([, value]) => 
    value !== undefined && value !== '' && !Array.isArray(value)
  );

  const vitamins = nutrition.vitamins || [];
  const minerals = nutrition.minerals || [];

  return (
    <Card 
      title="Nutrition Facts" 
      icon={<BeakerIcon className="w-5 h-5 text-orange-500" />}
    >
      <div className="space-y-4">
        {nutrition.servingSize && (
          <div className="text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-600 pb-2">
            Serving size: {nutrition.servingSize}
          </div>
        )}
        
        <div className="grid gap-3">
          {nutritionEntries.map(([key, value]) => {
            const displayKey = key
              .replace(/([A-Z])/g, ' $1')
              .replace(/^./, str => str.toUpperCase());
            
            return (
              <div key={key} className="flex justify-between items-center">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  {displayKey}
                </span>
                <span className="text-gray-900 dark:text-white font-semibold">
                  {value}
                </span>
              </div>
            );
          })}
        </div>

        {(vitamins.length > 0 || minerals.length > 0) && (
          <div className="pt-4 border-t border-gray-200 dark:border-gray-600 space-y-3">
            {vitamins.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Vitamins
                </h4>
                <div className="flex flex-wrap gap-2">
                  {vitamins.map((vitamin, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-medium rounded-full"
                    >
                      {vitamin}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {minerals.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  Minerals
                </h4>
                <div className="flex flex-wrap gap-2">
                  {minerals.map((mineral, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs font-medium rounded-full"
                    >
                      {mineral}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default NutritionCard;
