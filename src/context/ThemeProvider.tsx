import React, { useContext, useState } from 'react';

const ThemeContext = React.createContext<ThemeContextType>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

type Children = {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: Children) {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  
  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext);
}
