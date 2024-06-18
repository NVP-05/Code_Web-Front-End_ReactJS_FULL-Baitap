import React, { useState } from 'react';

export default function Bai9() {
    const [inputRadio, setInputRadio] = useState<string>("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputRadio(e.target.value);
    };

    return (
        <div>
            <p>Giới tính : {inputRadio}</p>
            <br />
            <input name='gender' type="radio" value="Nam" onChange={handleChange} /> Nam <br />
            <input name='gender' type="radio" value="Nữ" onChange={handleChange} /> Nữ <br />
            <input name='gender' type="radio" value="Khác" onChange={handleChange} /> Khác <br />
        </div>
    );
}