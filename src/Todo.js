import {ListItem, ListItemAvatar, ListItemText ,Checkbox} from '@mui/material';
import React,{useState} from 'react';
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Todo(props) {
    // console.log(props.todo.completed)
    const [checked, setchecked] = useState(props.todo.completed)
    const handleChange = (event) =>{
        setchecked(event.target.checked);
        db.collection('todos').doc(props.todo.id).update({completed : !checked})
    }
    return (
        <div className='list_items'>
            
                <ListItem>
                    <ListItemAvatar>
                    <Checkbox 
                    value='aadf'
                       checked={checked} 
                       onChange={handleChange}
                       inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </ListItemAvatar>
                    <ListItemText className={checked ? 'strike' : ''} primary={props.todo.todo} secondary={checked ? "Finished this work..." :"Don't Forget to do these....."}/>
                    <DeleteForeverIcon onClick={event => {db.collection('todos').doc(props.todo.id).delete()}}>DELETE ME</DeleteForeverIcon>
                </ListItem>
                
        </div>
    )
}

export default Todo
