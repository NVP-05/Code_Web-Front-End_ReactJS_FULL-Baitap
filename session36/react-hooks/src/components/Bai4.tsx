import React, { useState, useRef, useEffect } from 'react'

export default function Bai4() {
    
    const forcusInput = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        forcusInput.current?.focus();
    })
    
  return (
    <div>
      <input ref={forcusInput} type="text" placeholder='Focus me...'/>
    </div>
  )
}
