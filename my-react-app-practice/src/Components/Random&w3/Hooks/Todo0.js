import React, { useCallback , useState} from 'react'
import Todos from './Todos'

export default function Todo0() {

    const [val, setVal] = useState("");
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    const inp = (e) => {
        setVal(e.target.value);
    }

    const addTodo = () => {
        setTodos((t) => [...t, val]);
        setVal("");
        setCount(count+1);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>My Todos</h2>
            <p>Number of task added :{count}</p>
            <input type='text' value={val} placeholder='Type your task here...' onChange={inp} />
            <br /><br />
            <Todos todos={todos} addTodo={addTodo} />
        </div>
    )
}
