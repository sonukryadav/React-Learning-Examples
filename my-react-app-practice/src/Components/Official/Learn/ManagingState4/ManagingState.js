import React, { useState } from 'react';
import ChoosingTheStateStructure2 from './ChoosingTheStateStructure2';


const ManagingState = () => {
    return (
        <div>
            <hr />
            <hr />
            <h1>Managing State</h1>
            <Form />
            <ChoosingTheStateStructure2 />
        </div>
    );
}

// ---------------City quiz-------------------------------------

const Form = () => {

    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');

    function handelTextareaChange(e) {
        setAnswer(e.target.value);
    }

    if (status === 'success') {
        return <h1>That's right!</h1>
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }

    return (
        <div>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer} onChange={handelTextareaChange} disabled={status === 'submitting'} />
                <br />
                <button disabled={answer.length === 0 || status === 'submitting'}>Submit</button>
                {error !== null && <p className="Error">{error.message}</p>}
            </form>
        </div>);
}

const submitForm = (answer) => {
    // Pretend it's hitting the network
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima';
            if (shouldError) {
                reject(new Error('Good guess but a wrong answer. Try again'));
            } else {
                resolve();
            }
        }, 1500);
    });
}
// ----------xxx-----------------City quiz------------xxx-------------------------//

export default ManagingState;


