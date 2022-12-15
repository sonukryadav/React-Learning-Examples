import React, { useState } from 'react';


const Button = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <button onClick={increase}>Clicked {count} times</button>
        </div>
    )
}



const MyButton2 = () => {
    return (
        <div>
            <h3>useState</h3>
            <Button />
            <br/>
            <Button />
        </div>
    )
}

export default MyButton2;
