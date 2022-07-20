import React,{useState} from "react";
function Textfield()
{
    const [input,output]=useState(null)
    const[inputb,outputb]=useState(false)
  function getdata(val)
    {
console.log(val.target.value)
output(val.target.value)
outputb(false)
    }
    return(

        <>
        {
        inputb?
        <h3>{input}</h3>
        :null
        }
        <h4>Get User Input</h4>
        <h2>{input}</h2>
        <input type="text"onChange={getdata}/>
        <button onClick={()=>outputb(true)}>Print Value Entered</button>
        </>
    )
}
export default Textfield;