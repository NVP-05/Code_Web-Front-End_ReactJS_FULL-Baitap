import React, { useState } from 'react';

export default function Bai10() {
    const [checkboxValues, setCheckboxValues] = useState<string[]>([]);

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const checked = e.target.checked;

        if (checked) {
            setCheckboxValues([...checkboxValues, value]);
        } else {
            setCheckboxValues(checkboxValues.filter((item) => item !== value));
        }
    };
    console.log(checkboxValues);
    

    return (
        <div>
            <p>Sở thích: [{checkboxValues.join(',')}]</p>
            <input onChange={handleChange} type="checkbox" value="Đi chơi" /> Đi chơi <br />
            <input onChange={handleChange} type="checkbox" value="Bơi lội" /> Bơi lội <br />
            <input onChange={handleChange} type="checkbox" value="Code" /> Code <br />
            <input onChange={handleChange} type="checkbox" value="Nhảy dây" /> Nhảy dây <br />
        </div>
    );
}
