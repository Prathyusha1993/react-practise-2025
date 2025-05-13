import React, { createContext, useContext } from 'react';

// create context
const ThemeContext = createContext();

// provide context
function appContext() {
  return (
    <ThemeContext.Provider value='dark'>
        <Toolbar />
    </ThemeContext.Provider>
  )
}

// consume context
function Toolbar(){
    return <ThemedButton />
}

function ThemedButton() {
    const theme = useContext(ThemeContext);
    return <button className={theme}>I am syles by theme: {theme}</button>
}

export default appContext