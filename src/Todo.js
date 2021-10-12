import { List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import React from 'react';
import './Todo.css';


function Todo(props) {
    return (
        <div>
            <List className='todo_list'>
                <ListItem>
                    <ListItemAvatar>
                    </ListItemAvatar>
                    <ListItemText primary={props.text} secondary='My Todo List.....'/>
                </ListItem>
            </List>
            {/* <li>{props.text}</li> */}
        </div>
    )
}

export default Todo
