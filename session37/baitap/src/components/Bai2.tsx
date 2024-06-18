import React, { createContext, useState } from 'react';
import ThemeContext from './ThemeContext';

export const SetContext2 = createContext("");

export default function Bai2() {
  const [theme, setTheme] = useState('blue');

  return (
    <div>
      <SetContext2.Provider value={theme}>
      <ThemeContext></ThemeContext>
      </SetContext2.Provider>
    </div>
  );
}
