import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {   //check local storage for persisted theme
        const savedTheme = localStorage.getItem('app-theme');
        if(savedTheme) setTheme(savedTheme);
    }, []);

    useEffect(() => {
        localStorage.setItem('app-theme', theme);
        document.body.className = '';
        document.body.classList.add(theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}