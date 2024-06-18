import React, { useEffect, useState } from 'react'

export default function Bai10() {

    const [keyInfo, setKeyInfo] = useState<{ key: string; code: number | null }>({
        key: '',
        code: null,
      });
    
      useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          setKeyInfo({
            key: event.key,
            code: event.keyCode,
          });
        };
    
        window.addEventListener('keydown', handleKeyDown);
    
        return () => {
          window.removeEventListener('keydown', handleKeyDown);
        };
      }, []);

  return (
    <div>
      {keyInfo.code !== null && (
        <div>
            <p>Bạn vừa nhấn phím: {keyInfo.key}</p>
            <p>Mã phím: {keyInfo.code}</p>
        </div>
      )}
      
    </div>
  )
}
