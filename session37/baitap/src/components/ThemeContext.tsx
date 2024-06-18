import React, { useContext } from 'react';
import { SetContext } from './Bai1';
import { SetContext2 } from './Bai2.tsx';  

const ThemeContext = () => {
  const contextValue = useContext(SetContext);
  const contextValue2 = useContext(SetContext2);

  return (
    <div>
      <p>Context Value: {contextValue2}</p>
    </div>
  );
};

export default ThemeContext;