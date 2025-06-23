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

export default appContext;



/*
* create context
create a provider component
* wrap your app in provider
* access the value usiing useContext hook

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useSTate('light);
  return (
  <ThemeContext.Provider value={{theme, setTheme}}>
  {children}
  </ThemeContext.Provider>
  )
  }

  <THemProvider><App /></ThemeProvider>
// use the context in a component
const [theme, setTheme] = useContext(ThemeCOntext);
<button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
{theme === 'light' ? 'dark' : 'light' }mode
</button>
*/