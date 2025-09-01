import React from 'react';
import { Card } from '../ui/Card';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Specifications } from '@/types/product';

interface SpecificationsCardProps {
  specifications: Specifications;
}

export const SpecificationsCard: React.FC<SpecificationsCardProps> = ({ specifications }) => {
  // Filter out empty values and arrays
  const validSpecs = Object.entries(specifications).filter(([_, value]) => 
    value !== undefined && value !== '' && 
    (!Array.isArray(value) || value.length > 0)
  );

  if (validSpecs.length === 0) {
    return null;
  }

  const formatKey = (key: string) => {
    return key
      .replace(/([A-Z])/g, ' $1')
      .replace(/^./, str => str.toUpperCase());
  };

  const renderValue = (value: any) => {
    if (Array.isArray(value)) {
      return (
        <div className="flex flex-wrap gap-1">
          {value.map((item, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 text-xs font-medium rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      );
    }
    return (
      <span className="text-gray-900 dark:text-white font-medium">
        {value}
      </span>
    );
  };

  return (
    <Card 
      title="Specifications" 
      icon={<Cog6ToothIcon className="w-5 h-5 text-purple-500" />}
    >
      <div className="space-y-4">
        {validSpecs.map(([key, value]) => (
          <div 
            key={key}
            className="flex flex-col gap-2 p-3 bg-gray-50 dark:bg-gray-700/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="text-sm font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wide">
              {formatKey(key)}
            </div>
            <div>
              {renderValue(value)}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SpecificationsCard;
