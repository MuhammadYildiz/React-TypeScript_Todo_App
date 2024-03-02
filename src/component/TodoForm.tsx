import React from 'react'
type props = {
    todo: string,
    setTodo: React.Dispatch<React.SetStateAction<string>>,
    addTodoItem: () => void
}
const TodoForm: React.FC<props> = ({ todo, setTodo, addTodoItem }) => {
    const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addTodoItem()
        setTodo("")
    }
    return (
        <div className='w-full flex flex-col justify-center items-center  p-10  '>
            <h1 className="text-3xl  text-white my-5">React + TypeScript Todo List</h1>
            <form onSubmit={handleAdd} className='mt-5 flex flex-col sm:flex-row'>
                <input type="text" name="" id="" placeholder='Enter a todo item' value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    className='py-1 px-3 my-2 outline-none '
                />
                <button type="submit" className='bg-white text-black px-3 py-1 sm:mx-1 my-2 font-bold'>ADD</button>
            </form>
        </div>
    )
}
export default TodoForm
