import React, { useReducer } from 'react';

const genderReducer = (state, action) => {
  switch (action.type) {
    case 'SELECT_GENDER':
      return { selectedGender: action.payload };
    default:
      return state;
  }
};
export default function Bai8() {
    const [genderState, dispatch] = useReducer(genderReducer, {
        selectedGender: ''
      });
    
      const handleGenderChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'SELECT_GENDER', payload: event.target.value });
      };
  return (
    <div>
      <input
        type="radio"
        id="male"
        name="gender"
        value="male"
        checked={genderState.selectedGender === 'male'}
        onChange={handleGenderChange}
      />
      <label htmlFor="male">Male</label>
      
      <input
        type="radio"
        id="female"
        name="gender"
        value="female"
        checked={genderState.selectedGender === 'female'}
        onChange={handleGenderChange}
      />
      <label htmlFor="female">Female</label>
      
      <input
        type="radio"
        id="other"
        name="gender"
        value="other"
        checked={genderState.selectedGender === 'other'}
        onChange={handleGenderChange}
      />
      <label htmlFor="other">Other</label>
      <p>Selected Gender: {genderState.selectedGender}</p>
    </div>
  )
}
