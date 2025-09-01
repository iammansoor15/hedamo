import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { StarIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { UserCircleIcon } from '@heroicons/react/24/outline';
import { Review } from '@/types/product';

interface ReviewsCardProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

export const ReviewsCard: React.FC<ReviewsCardProps> = ({ 
  reviews, 
  rating, 
  reviewCount 
}) => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card 
      title="Customer Reviews" 
      icon={<StarIcon className="w-5 h-5 text-yellow-500" suppressHydrationWarning={true} />}
      className="col-span-2"
    >
      <div className="space-y-6">
        {/* Rating Summary */}
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-2xl">
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 dark:text-white">
                {rating}
              </div>
              <div className="flex items-center gap-1 mt-1">
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
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Based on {reviewCount} reviews
            </div>
          </div>
        </div>

        {/* Individual Reviews */}
        <div className="space-y-4">
          {displayedReviews.map((review) => (
            <div 
              key={review.id}
              className="p-4 border border-gray-100 dark:border-gray-700 rounded-2xl hover:border-gray-200 dark:hover:border-gray-600 transition-colors duration-200"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <UserCircleIcon className="w-10 h-10 text-gray-400 dark:text-gray-500" suppressHydrationWarning={true} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {review.author}
                    </h4>
                    {review.verified && (
                      <div className="flex items-center gap-1">
                        <CheckBadgeIcon className="w-4 h-4 text-green-500" suppressHydrationWarning={true} />
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-400'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                          suppressHydrationWarning={true}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(review.date)}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {review.comment}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {reviews.length > 3 && (
          <div className="text-center">
            <button
              onClick={() => setShowAllReviews(!showAllReviews)}
              className="px-6 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium transition-colors duration-200"
            >
              {showAllReviews ? 'Show Less' : `Show All ${reviews.length} Reviews`}
            </button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default ReviewsCard;
