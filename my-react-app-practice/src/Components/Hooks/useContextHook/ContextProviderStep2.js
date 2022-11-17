import React, { useState, useContext } from 'react'
import MyFirstContext from './createContextStep1';
import UseuseContextHook from './UseuseContextHook';

export default function ContextProvider() {
    const [user, setUser] = useState(['Sonu', 'Kumar', 'Yadav']);

    return (
        <MyFirstContext.Provider value={user[1]}>
            <h2>Hi my name is {user} & i am in 'myFirstContext.Provider'</h2>
            <Component2 name1={user} />
            <Component3 />
            <UseuseContextHook />
        </MyFirstContext.Provider>
    )
}


function Component2({ name1}) {
    return (
        <div>
            <h3>I am defined in component-2, and {name1}</h3>
        </div>
    )
}

function Component3() {
    const use1 = useContext(MyFirstContext);
    return (
        <div>
            <h3>I am defined in component-3, and {use1}</h3>
        </div>
    )
}

