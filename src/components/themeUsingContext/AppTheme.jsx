import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function AppTheme() {
    const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    <div className={`app-container ${theme}`}>
        <h1>{theme === 'light' ? 'Light Moda' : 'Dark Mode'}</h1>
        <button onClick={toggleTheme}>Toggle to {theme === 'light' ? 'Dark' : 'Light'}</button>
    </div>
  )
}

export default AppTheme