//import React, { useState } from "react";
import React,{ Component } from "react"
class Usercs extends Component{
    constructor()
    {
    super();
    this.state={
        data:"singh"
    }
    }
    apple()
    {
        this.setState({data:"applesingh"})
    }
    render()
    {
   return(
    <div>
        <h3>{this.state.data}</h3>
        <button onClick = {()=>this.apple()}>Click to know State in clss</button>
    </div>
   );
}}
export default Usercs;