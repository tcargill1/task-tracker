import './App.css';
import TaskInput from './components/taskInput.jsx';
import TaskList from './components/taskList.jsx';
import React, { useState } from 'react';

function App() {
  const [showList, setShowList] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Function that changes display of task list with showList state 
  const updateList = () => {
    setShowList((prev) => !prev);
  };

  // Function that adds a new task to the task state array
  const handleData = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  // Function that changes specific task into completed or not completed based on id
  const toggleCompletion = (id) => {
    setTasks(tasks.map(task => task.id === id ? {...task, completed: !task.completed} : task));
  };

  // Returns and renders app
  return (
    <div className = "text-center">
      <h1>Welcome to Task Tracker!</h1>
      <p> Track your tasks easily and efficiently! </p>
      {/*Calls task input component when adding task to array (Has the add task button inside)*/}
      <TaskInput addData={handleData} />
      {/* Button to choose to display list or not */}
      <button onClick = {updateList}>Task List</button>
      {/* if list is being shown, then call tasklist component for displaying task list*/}
      {showList && <TaskList tasks={tasks} setTasks={setTasks} toggle = {toggleCompletion} />} 
    </div>
  );
}

export default App;
