import React from 'react';
import Image from 'next/image';
import { StarIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import { Product } from '@/types/product';

interface ProductSummaryProps {
  product: Product;
  onClick: () => void;
}

export const ProductSummary: React.FC<ProductSummaryProps> = ({ product, onClick }) => {
  const [imageError, setImageError] = React.useState(false);

  return (
    <div 
      className="group cursor-pointer bg-white dark:bg-gray-800 rounded-3xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] hover:-translate-y-2"
      onClick={onClick}
    >
      {/* Product Image */}
      <div className="relative mb-6 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-700 aspect-[4/3]">
        {imageError ? (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
            <div className="text-center">
              <div className="text-4xl mb-2">🍯</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{product.name}</div>
            </div>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            suppressHydrationWarning={true}
            onError={() => setImageError(true)}
            loader={({ src, width, quality }) => {
              return `${src}?w=${width}&q=${quality || 75}`;
            }}
          />
        )}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-800 dark:text-gray-200 text-sm font-medium rounded-full border border-white/20">
            {product.category}
          </span>
        </div>
        
        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-2xl shadow-lg">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating)
                    ? 'text-yellow-400'
                    : 'text-gray-300 dark:text-gray-600'
                }`}
                suppressHydrationWarning={true}
              />
            ))}
          </div>
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            {product.rating}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({product.reviewCount} reviews)
          </span>
        </div>

        {/* Features Preview */}
        <div className="flex flex-wrap gap-2">
          {product.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full"
            >
              {feature}
            </span>
          ))}
          {product.features.length > 3 && (
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-medium rounded-full">
              +{product.features.length - 3} more
            </span>
          )}
        </div>

        {/* CTA Button */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Click to learn more
            </span>
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 transition-all duration-200">
              <span>Know More</span>
              <ArrowRightIcon
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                suppressHydrationWarning={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSummary;
