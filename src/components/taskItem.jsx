// Task item.jsx will manage a task item
// Will mark it as completed/deleted, description, and delete button
// done in a box
import React from 'react';

// Component for each taskItem
const TaskItem = ({ deleteFunc, id, title, date, description, completed, setCompleted, toggle }) => {

    // Changes completed state for task when clicked
    const completedFunc = () => {
        setCompleted((prev) => !prev)
    }

    return (
        <div class="taskItem">
            {/* Print title, date, description */}
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{description}</p>

            {/* Print checkbox for completed and when clicked, completed state changes*/}
            <label>
                <input 
                type="checkbox"
                checked={completed}
                onChange={() => { completedFunc(); toggle(); }}
                /> 
                Completed
            </label>

            {/* If task has completed state, displays button to delete task*/}
            {completed && (
                <button onClick={() => deleteFunc(id)}>Delete</button>
            )}
        </div>
    )
};

export default TaskItem;