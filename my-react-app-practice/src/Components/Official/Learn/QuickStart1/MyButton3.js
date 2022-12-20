import React, { useState } from 'react';


const Button = ({ data, fun }) => {
    return (
        <div>
            <button onClick={()=>fun(1)}>Clicked {data} times</button>
        </div>
    )
}



const MyButton3 = () => {

    const [value, setValue] = useState(0);

    const countIncrease = (p) => {
        setValue(value + p);
    };

    return (
        <div>
            <h3>Counters that update together</h3>
            <Button data={value} fun={countIncrease} />
            <br />
            <Button data={value} fun={countIncrease} />
        </div>
    )
};

export default MyButton3;
