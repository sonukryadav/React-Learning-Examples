import React from 'react'

export default function Select() {
    const [myCar, setMyCar] = React.useState("Volvo");

    const handleChange = (e) => {
        setMyCar(e.target.value);
    }

    return (
        <div>
            <form>
                <select value={myCar} onChange={handleChange}>
                    <option value="Ford">Ford</option>
                    <option value="Volvo">Volvo</option>
                    <option value="Fiat">Fiat</option>
                </select>
            </form>
        </div>
    )
}
