import React, { Component } from 'react';
import './App.css';
import UserInput from './Components/UserInput';
import TaskList from './Components/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          detail: 'Cook dinner',
          isDone: false,
          isSelected: false,
        },
        {
          detail: 'Do exercise',
          isDone: false,
          isSelected: false,
        },
        {
          detail: 'cook lunch',
          isDone: false,
          isSelected: false,
        },
      ],
      mode: 1,
    };
    this.handletaskDone = this.handletaskDone.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleSelectTask = this.handleSelectTask.bind(this);
    this.handleAddEditTask = this.handleAddEditTask.bind(this);
  }

  handletaskDone(id) {
    const { tasks } = this.state;
    tasks[id].isDone = true;
    const completed_task = tasks[id];
    tasks.splice(id, 1);
    tasks.push(completed_task);
    this.setState({
      tasks,
    });
    console.log(`task ${tasks[id].detail} done`);
  }

  handleDeleteTask(id) {
    const { tasks } = this.state;
    console.log(tasks[id]);
    const task_detail = tasks[id].detail;
    console.log(task_detail);
    tasks.splice(id, 1);
    console.log(tasks);
    this.setState({
      tasks,
    });
    console.log(`task ${task_detail} deleted`);
  }

  handleSelectTask(id) {
    const { tasks } = this.state;

    tasks[id].isSelected = true;
    //change mode to Edit
    this.setState({
      tasks,
      mode: 2,
    });
    console.log(`task ${tasks[id].detail} is selected`);
  }

  handleAddEditTask(id, detail) {
    // adds a task if mode is Add or update the task at id
    console.log(id);
    const { tasks, mode } = this.state;
    if (mode === 1) {
      tasks.push({
        detail: detail,
        isSelected: false,
        isDone: false,
      });
    } else {
      tasks[id].detail = detail;
    }
    //change the mode to Add
    this.setState({
      tasks,
      mode: 1,
    });
  }

  render() {
    const { tasks, mode } = this.state;

    return (
      <div className='App'>
        <h1>Today's Tasks</h1>
        <UserInput
          mode={mode}
          handleAddEditTask={this.handleAddEditTask}
          tasks={tasks}
        />
        <TaskList
          task_list={tasks}
          handletaskDone={this.handletaskDone}
          handleDeleteTask={this.handleDeleteTask}
          handleSelectTask={this.handleSelectTask}
        />
      </div>
    );
  }
}

export default App;
