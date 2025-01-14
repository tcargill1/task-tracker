import React, { useState } from 'react';

// Component that handles every task and their inputs
const TaskInput = ({ addData }) => {
    // Handles task, date, description, and id
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [description, setDesc] = useState('');
    const [id, setID] = useState(1)

    // Function that creates a new object with id, title, description, and date
    const handleAddTask = (id, task, description, date) => {
        const new_task = {id: id, title: task, description: description, date: date};
        // Calls function that is passed as a prop from App.jsx
        addData(new_task);
        // Clears the states used for each object
        setTask('');
        setDate('');
        setDesc('');
        setID(id + 1);
    };
    
    // Returns and renders task input
    return (
        // Three inputs for tasks
        <div className = "taskInput">
            <input
                type="Text"
                placeholder="Enter task title"
                value = {task}
                onChange = {(e) => setTask(e.target.value)}
            />
            <input
                type="Text"
                placeholder="Enter date"
                value = {date}
                onChange = {(e) => setDate(e.target.value)}
            />
            <input
                type="Text"
                placeholder="Enter description"
                value = {description}
                onChange = {(e) => setDesc(e.target.value)}
            />
            {/* Button that adds task when clicked with function call*/}
            <button onClick = {() => handleAddTask(id, task, description, date)}> Add task </button>
       </div>
    )
};

export default TaskInput;