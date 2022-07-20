import React,{useState} from "react"
function Forms()
{
    const[name,setname]=useState("")
    const[tc,settc]=useState(false)
    const[laptop,setlaptop]=useState("")
   function getFormData(e)
    {
        console.log(name,tc,laptop)
e.preventDefault()
    }
    return(
        <>
        <h4>Welcome to forms</h4>
        <form onSubmit={getFormData}>
            <input type="text" value={name}placeholder="Enter Name" onChange={(e)=>setname(e.target.value)}/><br/><br/>
            <select onChange={(e)=>setlaptop(e.target.value)}>
                <option>Select Option</option>
                <option>Apple</option>
                <option>Dell</option>
                <option>HP</option>
                
            </select>
            <br/><br/>
            <input onChange={(e)=>settc(e.target.checked)} type="checkbox"/><span>Enter T&C</span>
            
            <br/><br/>
            <button type="Submit">Submit</button>
            <button>Clear</button>

        </form>
        </>

    )
}
export default Forms