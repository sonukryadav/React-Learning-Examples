import React, { useState,useRef } from 'react'

export default function UseRefForAccessOfDOM() {
    const [val, setVal] = useState();

    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    return (
        <div>
            <input type="text" value={val} ref={inputElement} onChange={(e)=>setVal(e.target.value) } />
            <button onClick={focusInput}>Focus Input</button>
            <p>{val}</p>
        </div>
    )
}
