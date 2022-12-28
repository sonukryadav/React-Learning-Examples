import React from 'react';

function Car(props) {
    return <li key={props.index}>I am a {props.brand}</li>;
}

function Garage() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {cars.map((car, id) => <Car key={id} brand={car} />)}
            </ul>
        </>
    );
}

export default Garage;