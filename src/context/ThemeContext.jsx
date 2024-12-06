import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

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

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const THEME_STORAGE_KEY = 'preferred-theme';

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme || 'default';
  });

  useEffect(() => {
    localStorage.setItem(THEME_STORAGE_KEY, currentTheme);
  }, [currentTheme]);

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

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
