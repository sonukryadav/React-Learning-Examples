import { useState } from 'react';

function Form2() {

    const [name, setName] = useState('');

    function handelSubmit(event){
        event.preventDefault();
        alert(`You have entered your name as ${name}`);
        setName("");
    }

    return (
        <form onSubmit={handelSubmit}>
            <label>Enter your Full name :</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Your full name...'></input>
            <input type='submit' />
        </form>
    )
}

export default Form2;