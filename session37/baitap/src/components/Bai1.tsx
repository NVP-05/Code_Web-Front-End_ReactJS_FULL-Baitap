import React, { createContext, useState } from 'react'
import ThemeContext from './ThemeContext'
export const SetContext = createContext(null)

export default function Bai1() {
    const [name,setName] = useState<null>(null)
  return (
    <div>
    <SetContext.Provider value={name}><ThemeContext></ThemeContext></SetContext.Provider>
    </div>
  )
}
