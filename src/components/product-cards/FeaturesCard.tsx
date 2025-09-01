import React from 'react';
import { Card } from '../ui/Card';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface FeaturesCardProps {
  features: string[];
}

export const FeaturesCard: React.FC<FeaturesCardProps> = ({ features }) => {
  return (
    <Card 
      title="Key Features" 
      icon={<CheckCircleIcon className="w-5 h-5 text-green-500" />}
    >
      <div className="grid gap-3">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="flex-shrink-0">
              <CheckCircleIcon className="w-5 h-5 text-green-500" />
            </div>
            <span className="text-gray-800 dark:text-gray-200 font-medium">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default FeaturesCard;
