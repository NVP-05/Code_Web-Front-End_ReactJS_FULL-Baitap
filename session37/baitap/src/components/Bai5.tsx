import React, { useReducer } from 'react';

type Action = { type: 'increment' };
type State = { count: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      throw new Error('Unhandled action type');
  }
};

export default function Bai5() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Increase</button>
    </div>
  )
}
