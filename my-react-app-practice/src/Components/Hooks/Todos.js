import React, { memo, useState} from 'react'

export default function Todos({ todos, addTodo}) {
    const [val, setVal] = useState("");
    return (
        <div>
            <button onClick={addTodo}>Add to todo</button>
            <hr/>
            {todos.map((todo,index) => {
                return <p key={index}>{todo}</p>
            })}
        </div>
    )
}
