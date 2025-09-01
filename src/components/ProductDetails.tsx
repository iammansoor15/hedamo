import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Product } from '@/types/product';

// Card components
import { ImageGalleryCard } from './product-cards/ImageGalleryCard';
import { OverviewCard } from './product-cards/OverviewCard';
import { FeaturesCard } from './product-cards/FeaturesCard';
import { NutritionCard } from './product-cards/NutritionCard';
import { TraceabilityCard } from './product-cards/TraceabilityCard';
import { ReviewsCard } from './product-cards/ReviewsCard';
import { SpecificationsCard } from './product-cards/SpecificationsCard';

interface ProductDetailsProps {
  product: Product;
  onClose: () => void;
}

export const ProductDetails: React.FC<ProductDetailsProps> = ({ product, onClose }) => {
  // Handle escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.body.style.overflow = 'hidden'; // Prevent background scroll

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative w-full max-w-7xl bg-gray-50 dark:bg-gray-900 rounded-3xl shadow-2xl max-h-[90vh] overflow-hidden">
          {/* Header */}
          <div className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Product Details
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  {product.name}
                </p>
              </div>
              
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                aria-label="Close product details"
              >
                <XMarkIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
            {/* Samsung Weather Inspired Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
              
              {/* Image Gallery - Takes 2 columns on large screens */}
              <div className="lg:col-span-2">
                <ImageGalleryCard 
                  images={product.images} 
                  productName={product.name} 
                />
              </div>

              {/* Overview Card */}
              <div className="lg:col-span-1">
                <OverviewCard
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                  category={product.category}
                />
              </div>

              {/* Features Card */}
              <div className="md:col-span-1">
                <FeaturesCard features={product.features} />
              </div>

              {/* Nutrition Card - Only show if nutrition data exists */}
              {product.nutrition && Object.keys(product.nutrition).length > 0 && (
                <div className="md:col-span-1">
                  <NutritionCard nutrition={product.nutrition} />
                </div>
              )}

              {/* Specifications Card */}
              <div className="md:col-span-1">
                <SpecificationsCard specifications={product.specifications} />
              </div>

              {/* Traceability Card - Takes full width */}
              <div className="md:col-span-2 lg:col-span-3">
                <TraceabilityCard traceability={product.traceability} />
              </div>

              {/* Reviews Card - Takes full width */}
              <div className="md:col-span-2 lg:col-span-3">
                <ReviewsCard 
                  reviews={product.reviews}
                  rating={product.rating}
                  reviewCount={product.reviewCount}
                />
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Add to Cart
              </button>
              <button className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold rounded-2xl border border-gray-200 dark:border-gray-600 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
