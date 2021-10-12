import './App.css';
import React, { useState, useEffect } from 'react';
import {Button, FormControl, Input , InputLabel} from '@mui/material';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input,setInput] = useState('');
  
  useEffect(() => {
    db.collection('todos').orderBy('timestamp','desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, [])

  const add_todo = (event) =>{ 
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);
    setInput('');
   } 
  return (
    <div className="App">
      <h1>Hello World</h1>
      <form>
      <FormControl>
          <InputLabel>Write todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type='submit' variant="contained" onClick={add_todo}>Add ToDo</Button>
      </form>
      <ul>
        {todos.map((todo,index)=>(
            <Todo text={todo}/>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
