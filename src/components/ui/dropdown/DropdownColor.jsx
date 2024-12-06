import { useState } from 'react';
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

  const colors = [
    { name: 'Default', icon: defaultColor },
    { name: 'Blue', icon: blueColor },
    { name: 'Green', icon: greenColor },
    { name: 'Purple', icon: purpleColor },
  ];

  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='relative p-2 rounded-full group transition-all duration-300 hover:bg-slate-700'
        aria-expanded={isOpen}
        aria-haspopup='true'
      >
        <div className='relative z-10 flex items-center justify-center'>
          <img
            src={defaultColor}
            alt='Theme color'
            className='w-6 h-6 transform transition-transform duration-300 group-hover:scale-110'
          />
        </div>
        <div className='absolute inset-0 rounded-full bg-slate-600/0 transition-colors duration-300 group-hover:bg-slate-600/10' />
      </button>

      {isOpen && (
        <>
          <div
            className='fixed inset-0 z-40'
            onClick={() => setIsOpen(false)}
          />
          <div className='absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-slate-700 ring-1 ring-black ring-opacity-5 z-50'>
            <div className='py-1' role='menu' aria-orientation='vertical'>
              {colors.map((color) => (
                <button
                  key={color.name}
                  className='flex items-center w-full px-4 py-2 text-sm text-slate-50 hover:bg-slate-600 transition-colors duration-300'
                  role='menuitem'
                  onClick={() => setIsOpen(false)}
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
