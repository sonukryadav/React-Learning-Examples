import React, { useState } from 'react'

const ChoosingTheStateStructure2 = () => {
    return (
        <div>
          <MovingDot/>
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
                boxShadow:'10px 10px 200px 100px white',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x-20}px, ${position.y-150}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
            </div>
    );
}





export default ChoosingTheStateStructure2;


