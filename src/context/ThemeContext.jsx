import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const themes = {
  default: {
    text: 'text-slate-100',
    background: 'bg-slate-800',
    lightBg: 'bg-slate-700',
  },
  blue: {
    text: 'text-blue-100',
    background: 'bg-blue-900',
    lightBg: 'bg-blue-800',
  },
  green: {
    text: 'text-green-100',
    background: 'bg-green-900',
    lightBg: 'bg-green-700',
  },
  purple: {
    text: 'text-violet-100',
    background: 'bg-violet-900',
    lightBg: 'bg-violet-700',
  },
};

/**
 * Theme provider component that wraps the application to provide theme context
 *
 * @param {React.ReactNode} children - Child components to be wrapped by the provider
 * @returns {JSX.Element} ThemeProvider component
 */
export function ThemeProvider({ children }) {
  if (!children) {
    throw new Error('ThemeProvider requires children components');
  }

  const [currentTheme, setCurrentTheme] = useState('default');

  const value = {
    currentTheme,
    setCurrentTheme,
    theme: themes[currentTheme],
  };

  return (
    <ThemeContext.Provider value={value}>
      <div className={`min-h-screen transition-colors duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
