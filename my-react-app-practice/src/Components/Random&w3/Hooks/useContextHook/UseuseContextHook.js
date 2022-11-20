import React, { useState, useContext } from 'react'
import MyFirstContext from './createContextStep1'

export default function UseuseContextHook() {
    const midName = useContext(MyFirstContext);
    return (
        <div>
            <h2>Hii!! {midName}, i am from an external file.</h2>
            <p>
                First i placed the component inside the Context provider then it was
                able to use the data, provided by the context provider.
                But if we don't put in the the provider and place directly somewhere
                else then it cannot use the data provided by context provider.
            </p>
        </div>
    )
}
