import React, { useState } from 'react';

export default function Bai7() {
    const [inputValue, setInputValue] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            <textarea name="" id="" onChange={handleChange}></textarea>
            <p>Số kí tự: {inputValue.length}</p>
        </div>
    );
}
