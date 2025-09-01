import React from 'react';
import { Card } from '../ui/Card';
import { MapPinIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { Traceability } from '@/types/product';

interface TraceabilityCardProps {
  traceability: Traceability;
}

export const TraceabilityCard: React.FC<TraceabilityCardProps> = ({ traceability }) => {
  return (
    <Card 
      title="Origin & Traceability" 
      icon={<MapPinIcon className="w-5 h-5 text-blue-500" />}
      className="col-span-2"
    >
      <div className="space-y-6">
        {/* Origin Information */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <MapPinIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h4 className="font-semibold text-gray-900 dark:text-white">Origin</h4>
          </div>
          <p className="text-gray-700 dark:text-gray-300 font-medium">{traceability.origin}</p>
          
          {/* Additional origin details */}
          <div className="mt-3 grid grid-cols-2 gap-4 text-sm">
            {traceability.harvestDate && (
              <div>
                <span className="text-gray-600 dark:text-gray-400">Harvest Date:</span>
                <p className="font-medium text-gray-900 dark:text-white">{traceability.harvestDate}</p>
              </div>
            )}
            {traceability.harvest && (
              <div>
                <span className="text-gray-600 dark:text-gray-400">Harvest:</span>
                <p className="font-medium text-gray-900 dark:text-white">{traceability.harvest}</p>
              </div>
            )}
            {traceability.altitude && (
              <div>
                <span className="text-gray-600 dark:text-gray-400">Altitude:</span>
                <p className="font-medium text-gray-900 dark:text-white">{traceability.altitude}</p>
              </div>
            )}
            {traceability.batchNumber && (
              <div>
                <span className="text-gray-600 dark:text-gray-400">Batch:</span>
                <p className="font-medium text-gray-900 dark:text-white">{traceability.batchNumber}</p>
              </div>
            )}
          </div>
        </div>

        {/* Production Information */}
        <div className="grid md:grid-cols-2 gap-4">
          {(traceability.beekeeper || traceability.farm || traceability.artisan || traceability.roaster) && (
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                Production
              </h4>
              {traceability.beekeeper && (
                <div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Beekeeper:</span>
                  <p className="font-medium text-gray-900 dark:text-white">{traceability.beekeeper}</p>
                </div>
              )}
              {traceability.farm && (
                <div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Farm:</span>
                  <p className="font-medium text-gray-900 dark:text-white">{traceability.farm}</p>
                </div>
              )}
              {traceability.artisan && (
                <div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Artisan:</span>
                  <p className="font-medium text-gray-900 dark:text-white">{traceability.artisan}</p>
                </div>
              )}
              {traceability.roaster && (
                <div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Roaster:</span>
                  <p className="font-medium text-gray-900 dark:text-white">{traceability.roaster}</p>
                </div>
              )}
              {traceability.productionTime && (
                <div>
                  <span className="text-gray-600 dark:text-gray-400 text-sm">Production Time:</span>
                  <p className="font-medium text-gray-900 dark:text-white">{traceability.productionTime}</p>
                </div>
              )}
            </div>
          )}

          {/* Dates */}
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
              Timeline
            </h4>
            {traceability.processingDate && (
              <div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Processed:</span>
                <p className="font-medium text-gray-900 dark:text-white">{traceability.processingDate}</p>
              </div>
            )}
            {traceability.roastDate && (
              <div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Roast Date:</span>
                <p className="font-medium text-gray-900 dark:text-white">{traceability.roastDate}</p>
              </div>
            )}
            {traceability.dyeMethod && (
              <div>
                <span className="text-gray-600 dark:text-gray-400 text-sm">Dye Method:</span>
                <p className="font-medium text-gray-900 dark:text-white">{traceability.dyeMethod}</p>
              </div>
            )}
          </div>
        </div>

        {/* Certifications */}
        {traceability.certifications.length > 0 && (
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheckIcon className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h4 className="font-semibold text-gray-900 dark:text-white">Certifications</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {traceability.certifications.map((cert, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-sm font-medium rounded-full border border-green-200 dark:border-green-700"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Sustainability */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-2xl p-4">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Sustainability</h4>
          <p className="text-gray-700 dark:text-gray-300">{traceability.sustainability}</p>
        </div>
      </div>
    </Card>
  );
};

export default TraceabilityCard;
