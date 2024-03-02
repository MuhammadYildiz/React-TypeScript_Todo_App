import React from 'react'
import { Todos } from '../types/type'

type Props = {
    todos: Todos[],
    deleteTodoItem: (id: number) => void;
}
const ShowTodos: React.FC<Props> = ({ todos, deleteTodoItem }) => {
    return (
        <div className='w-full flex flex-col  items-center'>
            {todos.map((todo) => (
                <div key={todo.id} className='  p-2  bg-white w-[90%] sm:w-[60%] md:w-[40%] '>
                    <div className='flex justify-between bg-gray-900 p-2  text-white'>
                        <p >{todo.todoItem} </p>
                        <span onClick={() => deleteTodoItem(todo.id)} className='bg-white px-3 text-red-700 font-bold cursor-pointer'>X</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShowTodos
