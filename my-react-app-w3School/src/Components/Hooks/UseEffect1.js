import React, { useState, useEffect } from 'react';

export default function UseEffect1() {
    const [count, setCount] = useState(5);
    const [cal, setCal] = useState(3);
    const [cont, setCont] = useState(1);

    useEffect(() => {
        setCal(() => count * 2);
        setCont((count) => count * 2);
    },[count]);

    return (
        <div>
            <p>Count1: {count}</p>
            <p>Count2: { cont}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {cal}</p>
        </div>
    )
}
