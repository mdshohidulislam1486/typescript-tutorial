import React from 'react';
import { Todo } from '../model';
import SingleTod from './SingleTod';
import './style.css';


interface Props {
    todos: Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;

}

 const TodoList: React.FC<Props> = ({todos, setTodos}:Props) => {
  return (
    <div className="todos">
        {todos.map(todo =>(
          <SingleTod
            todo={todo}
            key={todo.id} 
            todos={todos}
            setTodos={setTodos}
          ></SingleTod>
        ))}
    </div>
  )
}

export default TodoList