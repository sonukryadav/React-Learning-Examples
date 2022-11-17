import React, { useState, useEffect} from 'react';

export default function UseEffect2() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let timer = setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);

        return () => clearTimeout(timer);

    }, []);

    return (
        <div>
            <h1>I've rendered {count} times!</h1>;
        </div>
    )
}
