import React from 'react';
import { Menu, X, Dumbbell, Home, Utensils } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const sections = [
    'Home',
    'Diet',
    'Strength',
    'Endurance',
    'Stamina',
    'Speed',
    'Plyometrics',
    'Stretches'
  ];

  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onSectionChange('Home')}
              className="flex items-center hover:bg-indigo-500 px-3 py-2 rounded-md"
            >
              <Home className="h-6 w-6 mr-2" />
              <span className="text-xl font-bold">Fit Mentor</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex space-x-4">
              {sections.slice(1).map((section) => (
                <button
                  key={section}
                  onClick={() => onSectionChange(section)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
                    currentSection === section
                      ? 'bg-indigo-700 text-white'
                      : 'text-indigo-100 hover:bg-indigo-500'
                  }`}
                >
                  {section === 'Diet' && <Utensils className="h-4 w-4 mr-2" />}
                  {section}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-indigo-100 hover:bg-indigo-500 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {sections.slice(1).map((section) => (
              <button
                key={section}
                onClick={() => {
                  onSectionChange(section);
                  setIsMenuOpen(false);
                }}
                className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium ${
                  currentSection === section
                    ? 'bg-indigo-700 text-white'
                    : 'text-indigo-100 hover:bg-indigo-500'
                }`}
              >
                {section === 'Diet' && <Utensils className="h-4 w-4 mr-2" />}
                {section}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;