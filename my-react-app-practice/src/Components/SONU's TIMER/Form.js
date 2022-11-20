import React, { useState, useEffect, useRef } from 'react';


export default function Form() {

    const [save, setSave] = useState([]);
    const [df, setDf] = useState({});
    const [count0, setCount0] = useState(0);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [s, setS] = useState('START');
    const tm = useRef()

    const run = () => {

    tm.current =  setInterval(() => {
            setCount1((c) => {

                if (c === 60) {
                    setCount0((m) => { 
                        if (m === 60) {
                            setCount2((g)=>g+1)
                            return 1;
                        }
                        return m+1;
                    })
                    return 1;
                }
                return c + 1;
            })
        },16.66)

    }


    const ss = () => {
        if (s === 'STOP') {
            setS('START');
            clearInterval(tm.current)
        }
        else {
            setS('STOP');
            run();
        }
    }

    const rs = () => {
        setCount0(0);
        setCount1(0);
        setCount2(0);
    }

    const typ = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setDf((v) => ({...v,[name]:value }))
    }

    const sub = () => {
        setCount2(Number(df.min)||0);
        setCount0(Number(df.sec)||0);
        setCount1(Number(df.ms) || 0);
        setS('STOP')
        run();
    }

    const prt = () => {
        save.push({ min: count2 , sec:  count0 , ms: count1 })
        setSave(save);
        console.log(save)
    }

    return (
        <div style={{textAlign:'center', backgroundColor:'lightskyblue',padding:'10px'}}>
            <hr/>
            <p>-: I am from FORM component :-</p>

            <label style={{color:'green'}}>Type your default time :  </label>
            <input type='number' max='60' placeholder='min' style={{ width: '40px', textAlign: 'center', margin: '5px' }} name='min' value={df.min} onChange={typ} />
            <input type='number' placeholder='sec' style={{ width: '40px', textAlign: 'center', margin: '5px' }} name='sec' value={df.sec} onChange={typ} />
            <input type='number' placeholder='ms' style={{ width: '40px', textAlign: 'center', margin: '5px' }} name='ms' value={df.ms} onChange={typ} />

            <input type='submit' style={{ padding: '2px 20px', backgroundColor: 'black', color: 'white' }} onClick={ sub} />
            

            <hr />
            {<span><span>{count2} min :</span> <span>{count0} s </span>:<span> {count1}</span></span>}
            <hr/>
            <button style={{ padding: '5px 20px', margin:'10px' }} onClick={ ss}>{ s}</button>
            <button style={{ padding: '5px 20px',margin: '10px' }} onClick={rs}>Reset</button>
            <button style={{ padding: '5px 20px', margin: '10px' }} onClick={prt}>Save</button>

            <hr />
            {save.map((v, id) => { return (<p key={id}>Slot { id+1} - Time : {v.min} min : {v.sec } sec : {v.ms}</p>) })}

        </div>
    )
}