import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id:1,
            todo: "Todo msg",
            complete: false,
            date: "date of creation",
        }
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}

})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider