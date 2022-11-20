import React, { useState, memo } from 'react'
import TodosUseCallback from './TodosUseCallback';

function Problem() {

    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = () => {
        setTodos((t) => [...t, "New Todo"]);
    };


    return (
        <div style={{textAlign:'center'}}>
            <TodosUseCallback todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </div>
    )
}

export default memo(Problem);