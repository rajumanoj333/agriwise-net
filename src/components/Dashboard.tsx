
import React from 'react';
import AgentCard from './AgentCard';
import WeatherWidget from './WeatherWidget';
import CropRecommendations from './CropRecommendations';
import SustainabilityMetrics from './SustainabilityMetrics';
import FarmData from './FarmData';
import { Cloud, Database, Leaf, LineChart } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto py-6 px-4">
      <h2 className="text-2xl font-bold mb-6 text-agrisync-primary">AI Agent Network</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <AgentCard 
          title="Farmer Advisor Agent"
          description="Analyzes your farm data and provides personalized recommendations to optimize resource usage."
          icon={Database}
          iconColor="text-agrisync-blue"
          status="active"
          lastUpdate="Today, 09:15 AM"
        />
        <AgentCard 
          title="Weather Station Agent"
          description="Monitors local weather conditions and forecasts to help you plan farm activities."
          icon={Cloud}
          iconColor="text-blue-500"
          status="active"
          lastUpdate="Today, 10:30 AM"
        />
        <AgentCard 
          title="Market Researcher Agent"
          description="Tracks market trends and crop prices to recommend the most profitable crops."
          icon={LineChart}
          iconColor="text-green-500"
          status="active"
          lastUpdate="Yesterday, 04:45 PM"
        />
        <AgentCard 
          title="Sustainability Agent"
          description="Analyzes environmental impact of your farming practices and suggests improvements."
          icon={Leaf}
          iconColor="text-green-600"
          status="active"
          lastUpdate="Today, 08:00 AM"
        />
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-agrisync-primary">Farm Insights</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <FarmData />
        </div>
        <div className="lg:col-span-2">
          <WeatherWidget />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CropRecommendations />
        <SustainabilityMetrics />
      </div>
    </div>
  );
};

export default Dashboard;
