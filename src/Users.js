import React, { useState } from "react";
function Users()
 {
    const[data,Setdata]=useState(0)
    function updatedata()
    {
        Setdata(data+1)
    }
    console.warn("_____________")
    return(
<div>
   <h3>{data}</h3>
   <button onClick={updatedata}>UseState Button</button>

    </div>
    );
    
}
export default Users;