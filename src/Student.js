import React, {useState} from "react";
function Student(props) {
    const [nam,setnam]=useState("Props Usestate")
console.log(props)
    return(
        <>
<div style={{backgroundColor: "skyblue", margin:10}}>
        <h1>Hello {props.name}</h1>
        <h2>Email:{props.email}</h2>
        <h3>address:{props.others.address}</h3>
        <h3>{nam}</h3>
       
        </div>
        <button onClick={()=>{setnam("Propsnew name")}}>Click for Props new name</button>
        </>

    )
}
export default Student;