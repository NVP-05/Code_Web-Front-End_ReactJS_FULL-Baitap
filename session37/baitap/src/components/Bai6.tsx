import React, { useReducer } from 'react';

type Action = { type: 'decrement' };
type State = { count: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'decrement':
      return state.count > 0 ? { count: state.count - 1 } : state;
    default:
      throw new Error('Unhandled action type');
  }
};

export default function Bai6() {
    const [state, dispatch] = useReducer(reducer, { count: 10 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement' })} disabled={state.count === 0}>Decrease</button>
    </div>
  )
}
