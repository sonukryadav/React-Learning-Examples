import React, { useState } from 'react';

export default function UseState1() {
    const [color, setColor] = useState("Red");
    const style = { color: `${color}` }
    return (
        <>
            <h2 style={style}>I am favorite color is {color}</h2>
            <button type='button' onClick={() => { setColor("Blue") }} >Blue</button>
            <button type='button' onClick={() => { setColor("Black") }}>Black</button>
            <button type='button' onClick={() => { setColor("Navy") }} >Navy</button>
            <button type='button' onClick={() => { setColor("Maroon") }}>Maroon</button>
        </>
    )
}