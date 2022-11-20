import React from 'react';

function Form3MultipleInput() {

    const [inputs, setInputs] = React.useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
        // console.log(inputs)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`${ inputs.username } and ${inputs.age}`)
        // console.log(inputs);
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Enter magic word:
                <input type="text" name="username" value={inputs.username || ""} onChange={handleChange} />
            </label><br/>
            <label>Enter your age:
                <input type="number" name="age" value={inputs.age || ""} onChange={handleChange} />
            </label>
            <input type="submit" />
        </form>
    )
}

export default Form3MultipleInput;