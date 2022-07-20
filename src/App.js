import './App.css';
import User from './User';
import Userc from './Userc';
import Users from './Users';
import Usercs from './Usercs';
import Student from './Student';
import React from 'react';
import Textfield from './Textfield';
import Hideshow from './Hideshow';
import Forms from './Forms';
import Ifprofile from './Ifprofile';
function App() {
  return (
    <div className="App">
      <>
     <h2>App Page</h2>
     <User/>
    <Userc/>
    <Users/>
    <Usercs/>
    <Student name={"Anil"} email={"anil@gmail.com"} others={{address:"delhi"}}/>
    <Textfield/>
    <Hideshow/>
    <Forms/>
    <Ifprofile/>
     </>
    </div>
  );
}


export default App;
