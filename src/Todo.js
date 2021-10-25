import {ListItem, ListItemAvatar, ListItemText ,Checkbox} from '@mui/material';
import React,{useState} from 'react';
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Todo(props) {
    const [checked, setchecked] = useState(props.todo_item._todo.completed)
   
    const handleChange = (event) =>{
        setchecked(event.target.checked);
        db.collection('todos').doc(props.todo_item.id).update({completed : !checked})
    }
    return (
        <div className='list_items'>
            
                <ListItem>
                    <ListItemAvatar>
                    <Checkbox 
                       checked={checked} 
                       onChange={handleChange}
                       inputProps={{ 'aria-label': 'controlled' }}
                    />
                    </ListItemAvatar>
                    <ListItemText className={checked ? 'strike' : ''} primary={props.todo_item._todo.todo} secondary={checked ? 'Finished' : 'Complete this work'}/>
                    <DeleteForeverIcon onClick={event => {db.collection('todos').doc(props.todo_item.id).delete()}}>DELETE ME</DeleteForeverIcon>
                </ListItem>
                
        </div>
    )
}

export default Todo
