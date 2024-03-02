import { useState } from 'react';
import TodoForm from './component/TodoForm.jsx';
import { Todos } from './types/type.js';
import ShowTodos from './component/ShowTodos.js';
const App: React.FC = () => {
    const [todo, setTodo] = useState<string>("");
    const [todos, setTodos] = useState<Todos[]>([]);

    const addTodoItem = () => {
        if (todo) {
            setTodos([...todos, { todoItem: todo, id: todos.length + 1 }]);
        }    
    };
    const deleteTodoItem = (id: number) => {
        setTodos(todos.filter(todo => todo.id != id))
    };
    return (
        < >
            <div className='bg-gray-900 h-[100dvh]  text-center'>
                <TodoForm todo={todo} setTodo={setTodo} addTodoItem={addTodoItem} />
                {todos.length <1 ? <p className='text-center text-red-600'>No Todos..</p>:"" }
                <ShowTodos todos={todos} deleteTodoItem={deleteTodoItem} />
                {todos.length > 1 ? <button onClick={()=>setTodos([])}
                className=' hover:text-red-600 bg-white my-5 px-3 py-1 font-bold'>Clear All Todos</button>:"" }
            </div>
        </>
    );
};
export default App;
