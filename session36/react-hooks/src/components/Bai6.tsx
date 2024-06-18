import React, { useEffect } from 'react';

export default function Bai6() {

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            document.title = `Vị trí cuộn: ${scrollPosition}`;
        };
        
        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div style={{ height: '200vh', padding: '20px' }}>
    </div>
  );
}
