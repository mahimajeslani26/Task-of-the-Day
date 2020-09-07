import React, { useState, useEffect } from 'react';
import { Button, InputLabel, Input, FormControl } from '@material-ui/core';

function UserInput(props) {
  const id =
    props.mode === 2 ? props.tasks.findIndex((task) => task.isSelected) : null;
  const [input_value, setInputValue] = useState('');
  useEffect(() => {
    setInputValue(props.mode === 2 ? props.tasks[id].detail : '');
  }, [props, id]);

  return (
    <FormControl className='UserInput'>
      <InputLabel>
        {props.mode === 1 ? 'Crate a new task' : 'Edit the task'}
      </InputLabel>
      <Input
        id='user_input'
        type='text'
        value={input_value}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <Button
        variant='contained'
        color='secondary'
        type='submit'
        disabled={!input_value}
        onClick={(event) => {
          event.preventDefault();
          props.handleAddEditTask(
            id,
            document.getElementById('user_input').value
          );
        }}
      >
        {props.mode === 1 ? 'Add' : 'Edit'}
      </Button>
    </FormControl>
  );
}

export default UserInput;
