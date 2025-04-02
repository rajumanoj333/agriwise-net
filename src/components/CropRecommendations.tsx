
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, DollarSign, Droplets } from 'lucide-react';

const CropRecommendations: React.FC = () => {
  // Mock data - in a real application, this would come from the Market Researcher Agent
  const recommendations = [
    {
      cropName: 'Soybeans',
      marketTrend: 'rising',
      waterNeeds: 'medium',
      profitPotential: 'high',
      sustainabilityScore: 85,
      bestPlantingTime: 'Next 2 weeks'
    },
    {
      cropName: 'Corn',
      marketTrend: 'stable',
      waterNeeds: 'high',
      profitPotential: 'medium',
      sustainabilityScore: 70,
      bestPlantingTime: 'Current season'
    },
    {
      cropName: 'Winter Wheat',
      marketTrend: 'rising',
      waterNeeds: 'low',
      profitPotential: 'medium',
      sustainabilityScore: 90,
      bestPlantingTime: 'Late fall'
    }
  ];

  const getTrendBadge = (trend: string) => {
    switch (trend) {
      case 'rising':
        return <Badge className="bg-green-500">Rising</Badge>;
      case 'stable':
        return <Badge className="bg-blue-500">Stable</Badge>;
      case 'falling':
        return <Badge className="bg-red-500">Falling</Badge>;
      default:
        return <Badge className="bg-gray-500">{trend}</Badge>;
    }
  };

  const getWaterNeedsBadge = (needs: string) => {
    switch (needs) {
      case 'low':
        return <Badge className="bg-green-500">Low Water</Badge>;
      case 'medium':
        return <Badge className="bg-blue-500">Medium Water</Badge>;
      case 'high':
        return <Badge className="bg-red-500">High Water</Badge>;
      default:
        return <Badge className="bg-gray-500">{needs}</Badge>;
    }
  };

  return (
    <Card>
      <CardHeader className="agrisync-gradient text-white">
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Market-Driven Crop Recommendations
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          {recommendations.map((crop, index) => (
            <div 
              key={index} 
              className="p-3 border rounded-md bg-white hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-semibold text-agrisync-primary">{crop.cropName}</h3>
                <div className="flex gap-2">
                  {getTrendBadge(crop.marketTrend)}
                  {getWaterNeedsBadge(crop.waterNeeds)}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                <div className="flex items-center gap-1">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span>Profit: {crop.profitPotential}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Droplets className="h-4 w-4 text-blue-600" />
                  <span>Water efficiency: {crop.waterNeeds}</span>
                </div>
                <div className="col-span-2">
                  <div className="mt-2">
                    <div className="flex justify-between text-xs mb-1">
                      <span>Sustainability Score</span>
                      <span>{crop.sustainabilityScore}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div 
                        className="bg-agrisync-primary h-1.5 rounded-full" 
                        style={{ width: `${crop.sustainabilityScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 text-xs text-gray-600 mt-1">
                  Best planting time: {crop.bestPlantingTime}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t text-sm text-center text-gray-600">
          <p>Recommendations based on current market trends, local weather patterns, and your farm's soil profile.</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CropRecommendations;
