import React, { useState } from 'react'

const ChoosingTheStateStructure2 = () => {
    return (
        <div>
            <hr/>
            <MovingDot />
            <hr />
            <FeedbackForm />
        </div>
    )
}


function MovingDot() {
    const [position, setPosition] = useState({
        x: 0,
        y:0
    });
    return (
        <div
            onPointerMove={e => {
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }}
            style={{
                position: 'relative',
                width: '100%',
                height: '50vh',
                border: '1px dotted green',
                backgroundColor:'black'
            }}>

            <div style={{
                position: 'absolute',
                boxShadow:'1px 1px 20px 10px white',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x}px, ${position.y}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
            </div>
    );
}


const FeedbackForm = () => {
    const [text, setText] = useState('');
    const [status, setStatus] = useState('typing');

    const handelSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        await sendMessage(text);
        setStatus('sent');
    }

    const isSending = status === 'sending';
    const isSent = status === 'sent';

    if (isSent) {
        return <h1>Thanks for feedback!</h1>
    }

    return (
        <div>
            <form onSubmit={handelSubmit}>
                <p>How was your stay at The Prancing Pony?</p>
                <textarea value={text} onChange={e=>setText(e.target.value)} disabled={isSending} />
                <br/>
                <button type='submit' disabled={isSending}>Submit</button>
            </form>
            {isSending && <p>Sending...</p> }

        </div>
    );

};

function sendMessage(text) {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}

export default ChoosingTheStateStructure2;


