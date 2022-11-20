import React, { useState, useCallback } from 'react'
import TodosUseCallback from './TodosUseCallback';

export default function Solution() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <div style = {{ textAlign: 'center' }} >
            <TodosUseCallback todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </div>)
}
