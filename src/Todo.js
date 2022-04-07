import {ListItem, ListItemAvatar, ListItemText ,Checkbox,Input, Tooltip} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DoneIcon from '@mui/icons-material/Done';
import React,{useState} from 'react';
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Todo(props) {
    const [checked, setchecked] = useState(props.todo_item._todo.completed)
    const [show, setshow] = useState(false);
    const editfield = (event) =>{
        setshow(false);
        db.collection('todos').doc(props.todo_item.id).update({todo : document.querySelector(`.listtext${props.todo_item.id}`).innerText})
    }
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
                    <ListItemText className={checked ? `strike listtext${props.todo_item.id}` : `listtext${props.todo_item.id}`} primary={props.todo_item._todo.todo}/>
                 {
                        show ?
                         <Tooltip title='Save' arrow>
                             <DoneIcon onClick={editfield} className='edit'></DoneIcon>
                         </Tooltip> :
                         <Tooltip title='Edit' arrow>
                             <EditIcon onClick={event=> {setshow(true)}} className='edit'></EditIcon>
                         </Tooltip>
                 }
                    
                    <Tooltip title='Delete' arrow><DeleteForeverIcon onClick={event => {db.collection('todos').doc(props.todo_item.id).delete()}}>DELETE ME</DeleteForeverIcon></Tooltip>
                </ListItem>

                {
                    show ?
                    (<Input autoFocus onChange={event => {document.querySelector(`.listtext${props.todo_item.id}`).innerText = event.target.value }}></Input>):
                    ('')
                }

                
        </div>
    )
}

export default Todo
