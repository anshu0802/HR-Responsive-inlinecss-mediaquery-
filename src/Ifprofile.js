import React,{useState} from "react";
function Ifprofile()

{
    const[loggedin,setloggedin]=useState(3)
    return(
        <div>
        {
        loggedin==1 ?
        <h1>Welcome Yashoda</h1>
        :loggedin==2 ?<h1>Welcome Guest</h1>
        :<h1>Welcome Blank</h1>}    </div>
    )

       }
export default Ifprofile;