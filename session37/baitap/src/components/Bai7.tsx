import React, { useReducer } from 'react';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      return { value: action.value };
    default:
      return state;
  }
};

export default function Bai7() {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '' });
    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'INPUT_CHANGE', value: event.target.value });
    };
  return (
    <div>
      <input
        type="text"
        value={inputState.value}
        onChange={handleInputChange}
      />
      <p>{inputState.value}</p>
    </div>
  )
}
