import React,{useState} from "react"
function Hideshow()
{
    const[status,setstatus]=useState(true)
    return(
        <>
        {
            status?<h1>Hide&Seek</h1>:null
        }
        <button onClick={()=>setstatus(false)}>Hide</button>
        <button onClick={()=>setstatus(true)}>Show</button>
        <div style = {{backgroundColor :"red"}}>
        <button style = {{backgroundColor :"green"}}onClick={()=>setstatus(!status)}>Toggle</button>
        </div>
        </>
    )
}
export default Hideshow;