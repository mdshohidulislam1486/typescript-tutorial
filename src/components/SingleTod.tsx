import React, { useEffect, useRef, useState } from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import './style.css'


type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTod:React.FC<Props> = ({todo, todos, setTodos}:Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)

    const handleDone =(id:number) =>{
        setTodos(todos.map((todo) => todo.id === id?{...todo, isDone: !todo.isDone}: todo )
        )}

    const handleEdit = (e:React.FormEvent, id:number) =>{
       e.preventDefault()

       setTodos(todos.map((todo) =>(
           todo.id === id ? {...todo, todo:editTodo} : todo
       )))
       setEdit(false)
    }
    const handleDelete = ( id:number) =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(() => {
        inputRef.current?.focus()
    }, [edit])
   
        
  return (
    <form action="" className='todos_single' onSubmit={(e) => handleEdit(e, todo.id)}>

        {
            edit ? (
                <input value={editTodo} 
                ref={inputRef}
                onChange={(e) => setEditTodo(e.target.value)}
                 className='todos_single--text'/>
            ):
            (
                todo.isDone ? (
                    <s className="todos_single--text">
                    {todo.todo}
                </s>
                ) : (
                    <span className="todos_single--text">
                        {todo.todo}
                    </span>
                )
            )
        }
        
        <div>
            <span className="icon"
             onClick={() =>{
                if(!edit && !todo.isDone){
                    setEdit(!edit);
                }
             }
            }
             
             ><AiFillEdit/></span>
            <span className="icon"onClick={() => handleDelete(todo.id)}><AiFillDelete/></span>
            <span className="icon" onClick={() => handleDone(todo.id)}><MdDone/></span>
        </div>
    </form>
  )
}

export default SingleTod