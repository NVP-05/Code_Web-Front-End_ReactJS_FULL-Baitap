import React, { useState, useEffect } from 'react';

export default function Bai5() {

    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timerId);
    }, []);

  return (
    <div>
        <p>Thời gian hiện tại: {time}</p>
    </div>
  )
}
