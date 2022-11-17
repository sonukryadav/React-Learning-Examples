import React from 'react'

export default function Textarea() {
    const [textarea, setTextarea] = React.useState(
        "The content of a textarea goes in the value attribute"
    );

    const handleChange = (e) => {
        setTextarea(e.target.value);
    }

    return (
        <div>
            <form>
                <textarea value={textarea} onChange={handleChange} />
            </form>
        </div>
    )
}
