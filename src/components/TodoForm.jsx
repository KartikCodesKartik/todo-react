import React, { useState } from 'react'
import { useTodo } from '../Context/TodoContext';

function TodoForm() {

    function formatDate(date) {
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear()).slice(-2);
        return `${day}/${month}/${year}`;
    }

    const today = new Date();
    let dt = formatDate(today) // Outputs: "22/07/24"


    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return

        addTodo({ todo:todo, completed:false, date:dt})
        setTodo("")
    }

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-[#FFB22C] text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

