import { useState } from 'react';
import { useTheme } from '../../../context/ThemeContext';
import defaultColor from '../../../assets/svg/color/default-color.svg';
import blueColor from '../../../assets/svg/color/blue.svg';
import greenColor from '../../../assets/svg/color/green.svg';
import purpleColor from '../../../assets/svg/color/purple.svg';

/**
 * A dropdown component for selecting theme colors
 *
 * @returns {JSX.Element} DropdownColor component
 */
export default function DropdownColor() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setCurrentTheme, theme } = useTheme();

  const colors = [
    { name: 'Default', icon: defaultColor, value: 'default' },
    { name: 'Blue', icon: blueColor, value: 'blue' },
    { name: 'Green', icon: greenColor, value: 'green' },
    { name: 'Purple', icon: purpleColor, value: 'purple' },
  ];

  const handleColorChange = (colorValue) => {
    setCurrentTheme(colorValue);
    setIsOpen(false);
  };

  const currentColor = colors.find((color) => color.value === currentTheme);

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='relative p-2 rounded-full group transition-all duration-300'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <div className='relative z-10 flex items-center justify-center'>
          <img
            src={currentColor.icon}
            alt='Theme color'
            className='w-6 h-6 transform transition-transform duration-300 group-hover:scale-110 border-[1px] border-slate-100/50 rounded-full'
          />
        </div>
        <div
          className={`absolute inset-0 rounded-full ${theme.lightBg} bg-opacity-0 group-hover:bg-opacity-10 transition-colors duration-300`}
        />
      </button>

      {isOpen && (
        <>
          <div
            className='fixed inset-0 z-40'
            onClick={() => setIsOpen(false)}
          />
          <div
            className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${theme.lightBg} ring-1 ring-black ring-opacity-5 z-50`}
          >
            <div className='py-1' role='menu' aria-orientation='vertical'>
              {colors.map((color) => (
                <button
                  key={color.value}
                  className={`flex items-center w-full px-4 py-2 text-sm ${theme.text} hover:bg-opacity-80 transition-colors duration-300`}
                  role='menuitem'
                  onClick={() => handleColorChange(color.value)}
                >
                  <img
                    src={color.icon}
                    alt={`${color.name} theme`}
                    className='w-6 h-6 mr-3'
                  />
                  {color.name}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
