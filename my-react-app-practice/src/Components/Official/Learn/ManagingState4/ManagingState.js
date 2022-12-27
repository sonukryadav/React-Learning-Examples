import React, { useState } from 'react';
import ChoosingTheStateStructure2 from './ChoosingTheStateStructure2';


const ManagingState = () => {
    return (
        <div style={{backgroundColor:'lightgray'}}>
            <hr />
            <hr />
            <h1>-: Managing State4 :-</h1>
            <h2 style={{color:'blue',textDecoration:'underline'}}>Reacting to input with state</h2>
            <Form />
            <h2 style={{ color: 'blue', textDecoration: 'underline'}}>Sharing state between components</h2>
            <Accordion />
            <h2 style={{ color: 'blue', textDecoration: 'underline' }}>Extracting state logic into a reducer</h2>
            {/* <ChoosingTheStateStructure2 /> */}
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


//-----------------Sharing state between components------------------------

function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Almaty, Kazakhstan</h2>
            <Panel title="About" isActive={activeIndex === 0} onShow={()=> setActiveIndex(0)} >
                With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
            </Panel>
            <Panel title="Etymology" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
            </Panel>
        </>
    );
}


const Panel = ({ title, children, isActive, onShow}) => {
    return (
        <section>
            <h3>{title}</h3>
            {isActive ? (<p>{ children }</p>) :(<button onClick={onShow}>Show</button>)}
        </section>
    );
}

//--------xxxx---Sharing state between components----------xxx-------------

export default ManagingState;


