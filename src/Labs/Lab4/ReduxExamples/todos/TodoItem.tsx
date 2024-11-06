import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
export default function TodoItem( {todo}: {todo: {title: string, id: string, description: string} }) {
  const dispatch = useDispatch();
  return (
    <li key={todo.id} className="list-group-item">
      <button onClick={() => dispatch(deleteTodo(todo.id))}
              id="wd-delete-todo-click"> Delete </button>
      <button onClick={() => dispatch(setTodo(todo))}
              id="wd-set-todo-click"> Edit </button>
      {todo.title}
    </li>
);}
