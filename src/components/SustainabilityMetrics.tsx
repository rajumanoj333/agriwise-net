
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Droplets, Leaf, Sprout } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const SustainabilityMetrics: React.FC = () => {
  // Mock data - in a real application, this would come from the Sustainability Agent
  const waterUsageData = [
    { month: 'Jan', usage: 120, optimal: 115 },
    { month: 'Feb', usage: 130, optimal: 115 },
    { month: 'Mar', usage: 125, optimal: 115 },
    { month: 'Apr', usage: 110, optimal: 115 },
    { month: 'May', usage: 105, optimal: 115 },
    { month: 'Jun', usage: 95, optimal: 115 },
  ];

  const sustainabilityMetrics = [
    {
      name: 'Water Efficiency',
      value: 85,
      icon: <Droplets className="h-4 w-4 text-blue-500" />,
      description: 'Your farm uses 15% less water than the regional average.'
    },
    {
      name: 'Soil Health',
      value: 78,
      icon: <Sprout className="h-4 w-4 text-green-600" />,
      description: 'Good organic matter, could improve with cover crops.'
    },
    {
      name: 'Biodiversity',
      value: 62,
      icon: <Leaf className="h-4 w-4 text-green-500" />,
      description: 'Consider adding more native plant species to increase biodiversity.'
    },
  ];

  return (
    <Card>
      <CardHeader className="agrisync-gradient text-white">
        <CardTitle className="flex items-center gap-2">
          <Leaf className="h-5 w-5" />
          Sustainability Insights
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-1">Water Usage Trend</h3>
          <p className="text-xs text-gray-600 mb-3">
            Your water efficiency has improved by 21% in the last 6 months
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={waterUsageData}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" fontSize={12} />
                <YAxis stroke="#666" fontSize={12} />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="usage"
                  stroke="#0077b6"
                  strokeWidth={2}
                  activeDot={{ r: 8 }}
                  name="Actual Usage"
                />
                <Line
                  type="monotone"
                  dataKey="optimal"
                  stroke="#2C5F2D"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  name="Optimal Level"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-4 mt-4">
          {sustainabilityMetrics.map((metric, index) => (
            <div key={index} className="border p-3 rounded-md hover:shadow-sm bg-white transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  {metric.icon}
                  <span className="font-medium text-sm">{metric.name}</span>
                </div>
                <span className="font-semibold text-agrisync-primary">{metric.value}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-agrisync-primary h-2 rounded-full"
                  style={{ width: `${metric.value}%` }}
                ></div>
              </div>
              <p className="mt-2 text-xs text-gray-600">{metric.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SustainabilityMetrics;
