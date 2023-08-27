import './App.css';
import React, {useEffect, useState}from 'react';
// import Message from Message.js;
import {Button} from '@mui/material'
import { FormControl,InputLabel,Input } from '@mui/material';
import Message from './Message';

function App() {
  const[input,setInput] = useState('')
  const[messages,setmessage] = useState([{username: 'nikhil', text:'hey'},{username:"vaibhav", text:'whatsup'}])
  const[username, setUsername]= useState("");
  useEffect(()=> {
    setUsername(prompt("Please enter your name"))
  },[] )
  // console.log(input)
  // console.log(messages)
  const sendMessage = (event)=>{
    event.preventDefault();
    setmessage([...messages,{username: username, text: input}])
    setInput('');
  }
  return (
    <div className="App">
      <h1>Hello Nikhil Here</h1>
      <h2>Welcome {username}</h2>
      <form>
      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value ={input} onChange={event => setInput(event.target.value)}/>
        <Button variant="contained" disabled = {!input} type='submit' onClick={sendMessage}>Send Message</Button>
      </FormControl>
      </form>
      {
        messages.map(messages =>(
          <Message username={messages.username}text={messages.text}/>
        ))
      }
    </div>
  );

}

export default App;
