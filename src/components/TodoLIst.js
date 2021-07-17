import React, { useState } from 'react'

function TodoLIst({Text,todos,settodos}) {
    const [state, setstate] = useState("")
    const handleClick=(todo)=>{
       const filtVal= todos.filter((filt)=>{
            return filt!==todo
        })
        settodos(filtVal)
    }
    const textDecore=(todo)=>{
        const str= todos.filter((str)=>{
            return str===todo 
        })
      
       }
    return (
        <div>
            {todos.map((todo)=>{
                return  <ul>
                           <li style={{textDecoration:state}} onClick={()=>textDecore(todo)}>{todo}<span style={{cursor:'pointer'}} onClick={()=>handleClick(todo)}> &emsp;X </span></li>
                        </ul>
            })}
        </div>
    )
}

export default TodoLIst ;
