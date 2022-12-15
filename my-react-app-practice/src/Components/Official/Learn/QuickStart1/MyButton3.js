import React, { useState } from 'react';


const Button = (count, increase) => {
    return (
        <div>
            <button onClick={increase}>Clicked {count} times</button>
        </div>
    )
}



const MyButton3 = () => {
    return (
        <div>
            <h3>Counters that update together</h3>
            <Button />
            <br />
            <Button />
        </div>
    )
}

export default MyButton3;
