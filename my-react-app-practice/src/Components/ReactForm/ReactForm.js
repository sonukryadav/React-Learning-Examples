import React, { useState, useEffect } from 'react';
import Table from './table';

export default function ReactForm() {
    const [input, setInput] = useState({});
    const [inputs, setInputs] = useState([]);
    const [i, setI] = useState(0);
    // console.log(inputs.length)

    // useEffect(() => {
    //     inputs.push(input);
    // });


    const hdc = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInput((v) => ({ ...v, [name]: value }))
        // console.log(input)
    }
    const hds = (e) => {
        e.preventDefault();
        if (Object.keys(input).length === 0) {
            alert('First fill the form first')
        }
        else
        // console.log(inputs.length)
        inputs.push(input);
        setInputs((h) => inputs)
        setI((i) => i + 1)
        setInput({});
        // console.log(inputs.length)
    }

    useEffect(() => {
        console.log('render and re-render')
    },[i])


    var loadFile = function (event) {
        var image = document.getElementById('output');
        image.style.display = 'block';
        image.src = URL.createObjectURL(event.target.files[0]);
    };
    return (
        <div style={{textAlign:'center', backgroundColor:'lightskyblue'}}>
            <hr />
            <p>-: I am from ReactFORM component :-</p>

            <form onSubmit={hds}>

                <label>Name:</label>
                <input type='text' name='name' value={input.name || ''} placeholder='Name....' onChange={hdc} ></input>
                <br />
                <label>Age:</label>
                <input type='number' name='age' value={input.age || ''} placeholder='Age....' onChange={hdc} ></input>
                <br />
                <label>Address:</label>
                <input type='text' name='address' value={input.address || ''} placeholder='address....' onChange={hdc} ></input>
                <br />
                <label>Department:</label><br />
                <input type='checkbox' name='Department' value='ReactJS' onChange={hdc} />
                <label>React JS</label>
                <input type='checkbox' name='Department' value='ReactNative' onChange={hdc} />
                <label>React Native</label><br />
                <label>Salary:</label>
                <input type='number' name='salary' value={input.salary || ''} placeholder='Expected Salary....' onChange={hdc}></input>
                <br />
                <label>Marital state:</label><br />
                <input type='checkbox' name='Maritalstate' value='married' onChange={hdc} />
                <label>Married</label>
                <input type='checkbox' name='Maritalstate' value='unmarried' onChange={hdc} />
                <label>Unmarried</label><br />
                <br />
                <label>Upload photo: </label>
                <input type="file" name="photo" value={input.photo || ''} accept="image/*" onChange={(e) => { hdc(e); loadFile(e) }} /><br /><br /><br />
                <img id='output' width='200' alt='pic...' style={{ display: 'none' }} />
                <input type='submit' />
            </form>

            <p>Number of candidates : {(inputs.length)}</p>
            {inputs.length ? <Table d={inputs} /> : <p> No data</p>}

            <hr />
        </div>
    )
}