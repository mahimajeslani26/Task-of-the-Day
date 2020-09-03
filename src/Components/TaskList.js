import React from 'react';
import Task from './Task';

function TaskList(props) {
  return (
    <div className='TaskList'>
      {props.task_list.map((task, id) => {
        return (
          <Task
            key={id}
            task={task}
            handletaskDone={props.handletaskDone}
            handleDeleteTask={props.handleDeleteTask}
            handleSelectTask={props.handleSelectTask}
            taskId={id}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
