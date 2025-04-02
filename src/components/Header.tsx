
import React from 'react';
import { Cloud, Leaf, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-agrisync-primary text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-agrisync-secondary" />
          <h1 className="text-2xl font-bold">AgriSync</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" className="text-white hover:text-agrisync-secondary">
            Dashboard
          </Button>
          <Button variant="ghost" className="text-white hover:text-agrisync-secondary">
            Farm Profile
          </Button>
          <Button variant="ghost" className="text-white hover:text-agrisync-secondary">
            Recommendations
          </Button>
          <Button variant="ghost" className="text-white hover:text-agrisync-secondary">
            Analytics
          </Button>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1 bg-agrisync-secondary/20 px-3 py-1 rounded-full">
            <Cloud className="h-4 w-4" />
            <span className="text-sm">Sunny, 24°C</span>
          </div>
          <Button variant="outline" size="icon" className="md:hidden border-white text-white hover:bg-white/20 hover:text-white">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
