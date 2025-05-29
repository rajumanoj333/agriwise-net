
import React from 'react';
import { Button } from '@/components/ui/button';
import { LucideIcon } from 'lucide-react';

interface AgentCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  // iconColor prop removed as it's no longer used; header icon is hardcoded to text-white
  status: 'active' | 'inactive' | 'loading';
  lastUpdate?: string;
}

const AgentCard: React.FC<AgentCardProps> = ({
  title,
  description,
  icon: Icon,
  // iconColor destructured prop removed
  status,
  lastUpdate
}) => {
  const statusColors = {
    active: 'bg-agrisync-secondary', // Changed from bg-green-500
    inactive: 'bg-gray-400',
    loading: 'bg-yellow-400 animate-pulse-slow'
  };
  
  return (
    <div className="agrisync-card">
      <div className="agrisync-card-header flex justify-between items-center">
        <div className="flex items-center gap-2">
          {/* Ensure icon is white on the gradient header */}
          <Icon className="h-5 w-5 text-white" /> 
          <h3 className="font-semibold">{title}</h3> {/* Will inherit text-white from parent */}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <div className={`h-2 w-2 rounded-full ${statusColors[status]}`}></div>
            {/* Ensure status text is white on the gradient header */}
            <span className="text-xs capitalize text-white">{status}</span>
          </div>
        </div>
      </div>
      <div className="agrisync-card-body">
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        
        {lastUpdate && (
          <div className="text-xs text-gray-500 mb-3">
            Last update: {lastUpdate}
          </div>
        )}
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            size="sm" 
            className="text-xs border-agrisync-primary text-agrisync-primary hover:bg-agrisync-primary hover:text-white"
          >
            View Details
          </Button>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs text-agrisync-primary hover:bg-agrisync-lightGreen"
          >
            Configure
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
