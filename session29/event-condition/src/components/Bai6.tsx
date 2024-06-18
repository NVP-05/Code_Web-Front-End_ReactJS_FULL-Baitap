import React, { useState } from 'react';

export default function Bai6() {
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
