import React,{ useState } from 'react'

export default function Bai5() {
    const [inputValue, setInputValue] = useState<string>("");

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div>
        
        <input
          type="text"
          onChange={handleInputChange}
        />
        <p>{inputValue}</p>
      </div>
    );
}
