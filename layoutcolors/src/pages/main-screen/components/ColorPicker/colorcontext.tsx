import React, { createContext, useState, useContext, useEffect } from 'react';

const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState({
    color1: '#00AE9C',
    color2: '#62C3B3',
    color3: '#d6d6d6',
  });

  useEffect(() => {
    // Atualizar as variáveis CSS sempre que as cores mudarem
    document.documentElement.style.setProperty('--color-primary', colors.color1);
    document.documentElement.style.setProperty('--color-secondary', colors.color2);
    document.documentElement.style.setProperty('--color-highlight', colors.color3);
  }, [colors]);

  return (
    <ColorContext.Provider value={{ colors, setColors }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColors = () => useContext(ColorContext);
