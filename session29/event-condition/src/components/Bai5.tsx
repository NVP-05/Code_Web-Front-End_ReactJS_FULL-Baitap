import React, { useState } from 'react';

export default function Bai5() {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hiển' : 'Ẩn'}
      </button>
    </div>
  );
}
