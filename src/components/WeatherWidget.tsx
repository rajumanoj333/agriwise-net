
import React from 'react';
import { Cloud, Droplets, Sun, Thermometer, Wind } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const WeatherWidget: React.FC = () => {
  // Mock data - in a real application, this would come from an API
  const weatherData = {
    current: {
      temperature: 24,
      condition: 'Sunny',
      humidity: 45,
      windSpeed: 12,
      precipitation: 0,
    },
    forecast: [
      { day: 'Mon', temp: 23, condition: 'Sunny' },
      { day: 'Tue', temp: 25, condition: 'Partly Cloudy' },
      { day: 'Wed', temp: 22, condition: 'Cloudy' },
      { day: 'Thu', temp: 20, condition: 'Rain' },
      { day: 'Fri', temp: 21, condition: 'Partly Cloudy' },
    ]
  };

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="h-6 w-6 text-yellow-500" />;
      case 'partly cloudy':
        return <Cloud className="h-6 w-6 text-gray-400" />;
      case 'cloudy':
        return <Cloud className="h-6 w-6 text-gray-500" />;
      case 'rain':
        return <Droplets className="h-6 w-6 text-blue-500" />;
      default:
        return <Sun className="h-6 w-6 text-yellow-500" />;
    }
  };

  return (
    <Card className="overflow-hidden">
      <CardHeader className="agrisync-gradient text-white">
        <CardTitle className="flex items-center gap-2">
          <Sun className="h-5 w-5" />
          Weather Station Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="p-4 bg-agrisync-lightGreen/50">
          <div className="flex items-center gap-4">
            <div className="text-4xl font-semibold">
              {weatherData.current.temperature}°C
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-medium">{weatherData.current.condition}</span>
              <span className="text-sm text-gray-600">Farm location</span>
            </div>
            <div className="ml-auto">
              {getWeatherIcon(weatherData.current.condition)}
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-2 mt-4">
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-agrisync-blue" />
              <span className="text-sm">{weatherData.current.humidity}% Humidity</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="h-4 w-4 text-gray-500" />
              <span className="text-sm">{weatherData.current.windSpeed} km/h</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-red-500" />
              <span className="text-sm">Feels like 26°C</span>
            </div>
          </div>
        </div>
        
        <div className="p-4">
          <h4 className="text-sm font-medium mb-3">5-Day Forecast</h4>
          <div className="flex justify-between">
            {weatherData.forecast.map((day, index) => (
              <div key={index} className="text-center">
                <div className="text-xs font-medium">{day.day}</div>
                <div className="my-1">{getWeatherIcon(day.condition)}</div>
                <div className="text-sm">{day.temp}°</div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 pt-4 border-t">
            <h4 className="text-sm font-medium mb-2">Agricultural Weather Alert</h4>
            <p className="text-xs text-gray-600">
              Ideal conditions for crop spraying in the next 48 hours. 
              Low wind and no rain expected.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherWidget;
