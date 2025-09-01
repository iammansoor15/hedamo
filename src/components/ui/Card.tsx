import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  icon?: React.ReactNode;
  gradient?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  title, 
  icon,
  gradient = false 
}) => {
  return (
    <div 
      className={`
        relative overflow-hidden rounded-3xl p-6 
        ${gradient 
          ? 'bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900' 
          : 'bg-white dark:bg-gray-800'
        }
        border border-gray-100 dark:border-gray-700
        shadow-sm hover:shadow-lg
        transition-all duration-300 ease-in-out
        hover:scale-[1.02] hover:-translate-y-1
        backdrop-blur-sm
        ${className}
      `}
    >
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 dark:to-white/5 pointer-events-none" />
      
      {title && (
        <div className="flex items-center gap-3 mb-4 relative z-10">
          {icon && (
            <div className="p-2 rounded-xl bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
        </div>
      )}
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Card;
