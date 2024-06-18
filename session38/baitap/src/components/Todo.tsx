import React, { useReducer, useState } from "react";

interface Todo {
  id: number;
  name: string;
  status: boolean;
}

export default function Todo() {
  /*
        Thực hành làm todolist dùng useReducer

    */
  // Khai báo state trước
  const initial = {
    todos: [],
    isloading: false,
    todo: {
      id: 0,
      name: "",
      status: false,
    },
  };

  // Khởi tạo hàm tạo action
  const action = (type: string, payload: any) => {
    return {
      type: type,
      payload: payload,
    };
  };

  // Khởi tạo hàm reducer
  const reducer = (state: any = initial, action: any) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        return { ...state, todo: { ...state.todo, name: action.payload } };
      case "ADD_TODO":
        return {    
          ...state,
          todos: [
            ...state.todos,
            {
              ...action.payload,
              id: Math.floor(
                Math.random() * 9999999 + new Date().getMilliseconds()
              ),
            },
          ],
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initial);

  //Hàm lấy giá trị ô input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    dispatch(action("CHANGE_INPUT", inputValue));
  };

  // Hàm thêm công việc
  const addTodo = () => {
    dispatch(action("ADD_TODO", state.todo));
  };

  return (
    <div>
      <input onChange={handleChange} type="text" />
      <button onClick={addTodo}>Thêm công việc</button>
      <p>Danh sach công việc</p>
      <ul>
        {state.todos.map((item: Todo, index: number) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}
