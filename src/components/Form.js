import React, { useState } from 'react'

function Form({Text,setText,todos,settodos}) {
    const [input, setinput] = useState("")

    const handleChange=(e)=>{
        setText(e.target.value)
        setinput(e.target.value)

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setinput("")
        settodos([...todos,input])
    }
    return (    
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={input} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form
