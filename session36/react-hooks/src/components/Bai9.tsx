import React, { useEffect, useState } from 'react'

export default function Bai9() {

    const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);


  return (
    <div>
        <p>Thời gian đã trôi qua: {seconds} giây</p>
    </div>
  )
}
