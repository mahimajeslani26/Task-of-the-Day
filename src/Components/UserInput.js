import React, { useState, useEffect } from 'react';

function UserInput(props) {
  const id =
    props.mode === 2 ? props.tasks.findIndex((task) => task.isSelected) : null;
  const [input_value, setInputValue] = useState('');
  useEffect(() => {
    setInputValue(props.mode === 2 ? props.tasks[id].detail : '');
  }, [props, id]);

  return (
    <div className='UserInput'>
      <input
        id='user_input'
        type='text'
        value={input_value}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type='submit'
        value={props.mode === 1 ? 'Add' : 'Edit'}
        onClick={() =>
          props.handleAddEditTask(
            id,
            document.getElementById('user_input').value
          )
        }
      />
    </div>
  );
}

export default UserInput;
