import React from 'react';
import { Card } from '../ui/Card';
import { StarIcon, HeartIcon } from '@heroicons/react/24/solid';
import { HeartIcon as HeartOutlineIcon } from '@heroicons/react/24/outline';

interface OverviewCardProps {
  name: string;
  description: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: string;
}

export const OverviewCard: React.FC<OverviewCardProps> = ({
  name,
  description,
  price,
  rating,
  reviewCount,
  category
}) => {
  const [isFavorited, setIsFavorited] = React.useState(false);

  return (
    <Card 
      title="Product Overview" 
      icon={<div className="w-5 h-5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />}
    >
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {name}
            </h2>
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
              {category}
            </span>
          </div>
          
          <button
            onClick={() => setIsFavorited(!isFavorited)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
            aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorited ? (
              <HeartIcon className="w-6 h-6 text-red-500" suppressHydrationWarning={true} />
            ) : (
              <HeartOutlineIcon className="w-6 h-6 text-gray-400 dark:text-gray-500" suppressHydrationWarning={true} />
            )}
          </button>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300 dark:text-gray-600'
                  }`}
                  suppressHydrationWarning={true}
                />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {rating}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              ({reviewCount} reviews)
            </span>
          </div>
          
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              ${price.toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OverviewCard;
