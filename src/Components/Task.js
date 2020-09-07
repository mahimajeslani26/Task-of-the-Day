import React from 'react';
import ReactMarkdown from 'react-markdown';
import '../style/Task.css';
import Draggable from 'react-draggable';
import { List, ListItem, ListItemText } from '@material-ui/core';

function Task(props) {
  const taskStyle = {
    background: props.task.isDone ? 'darkseagreen' : 'rosybrown',
  };

  return (
    <Draggable handle='#task-content'>
      <div className='Task' style={taskStyle}>
        <List>
          <ListItem>
            <ListItemText
              primary={props.task.isDone ? 'Complete' : 'ToDo'}
              secondary={props.task.detail}
            />
          </ListItem>
        </List>

        <div id='task-actions'>
          {props.task.isDone ? null : (
            <div>
              <input
                id='done_button'
                type='button'
                value='Done'
                onClick={() => props.handletaskDone(props.taskId)}
              />
              <br />
            </div>
          )}

          {props.task.isDone ? null : (
            <div>
              <input
                id='edit_button'
                type='button'
                value='Edit'
                onClick={() => props.handleSelectTask(props.taskId)}
              />

              <br />
            </div>
          )}
          <input
            id='delete_button'
            type='button'
            value='Delete'
            onClick={() => props.handleDeleteTask(props.taskId)}
          />
        </div>
      </div>
    </Draggable>
  );
}

export default Task;
