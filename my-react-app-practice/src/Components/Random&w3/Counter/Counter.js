import React, { useEffect, useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = count;
    })


    const counti = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h2>Count is {count}</h2>
            <button onClick={counti}>+1</button>
        </div>
    )
}

export default Counter
