import './App.css';
import React, { useState, useEffect } from 'react';
import {Button, FormControl, Input , InputLabel, List, Select ,MenuItem} from '@mui/material';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input,setInput] = useState('');
  const [order,setorder] = useState('desc')
  
  useEffect(() => {
    db.collection('todos').orderBy('timestamp',order).onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id: doc.id ,todo: doc.data().todo,completed : doc.data().completed})))
    })
  }, [order,input])

  const add_todo = (event) =>{ 
    event.preventDefault();
    db.collection('todos').add({
      todo: input,
      completed: false,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos,input]);
    setInput('');
   } 
  return (
    <div className="App">
      <h1>My New TO-DO APP</h1>
      <div className='wrapper'>
      <FormControl className='drop_down' variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Sort</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={order}
          onChange={ event => setorder(event.target.value) }
          label="Sort"
        >
          <MenuItem value={'asc'}>Ascending order</MenuItem>
          <MenuItem value={'desc'}>Descending order</MenuItem>
        </Select>
      </FormControl>
      <form>
      <FormControl>
          <InputLabel>Write todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
      </FormControl>
      <Button disabled={!input} type='submit' variant="contained" onClick={add_todo}>Add ToDo</Button>
      </form>
      </div>
      <List className='list'>
        {todos.map((todo,index)=>(
            <Todo todo={todo} key= {index}/>
        ))}
        
      </List>
    </div>
  );
}

export default App;
