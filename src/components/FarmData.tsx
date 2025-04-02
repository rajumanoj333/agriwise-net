
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Database, FileSpreadsheet, Map } from 'lucide-react';

const FarmData: React.FC = () => {
  // Mock farm data
  const farmData = {
    name: "Green Valley Farm",
    location: "Midwest Region",
    size: "240 acres",
    soilTypes: ["Loam", "Clay Loam", "Sandy Loam"],
    currentCrops: ["Corn", "Soybeans", "Wheat"],
    waterSources: ["Well", "Natural pond"]
  };

  return (
    <Card>
      <CardHeader className="agrisync-gradient text-white">
        <CardTitle className="flex items-center gap-2">
          <Database className="h-5 w-5" />
          Farm Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Farm Name</h3>
              <p className="font-semibold text-agrisync-primary">{farmData.name}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Location</h3>
              <p>{farmData.location}</p>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Size</h3>
              <p>{farmData.size}</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Soil Types</h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {farmData.soilTypes.map((soil, index) => (
                  <span key={index} className="px-2 py-1 bg-agrisync-lightGreen rounded text-xs">
                    {soil}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Current Crops</h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {farmData.currentCrops.map((crop, index) => (
                  <span key={index} className="px-2 py-1 bg-agrisync-lightBrown rounded text-xs">
                    {crop}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-500">Water Sources</h3>
              <div className="flex flex-wrap gap-1 mt-1">
                {farmData.waterSources.map((source, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-100 rounded text-xs">
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t">
          <button className="flex items-center justify-center gap-2 p-2 border rounded-md hover:bg-agrisync-lightGreen transition-colors">
            <Map className="h-4 w-4 text-agrisync-primary" />
            <span className="text-sm">View Farm Map</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-2 border rounded-md hover:bg-agrisync-lightGreen transition-colors">
            <FileSpreadsheet className="h-4 w-4 text-agrisync-primary" />
            <span className="text-sm">Historical Data</span>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default FarmData;
