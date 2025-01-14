import React, {useState} from 'react';
import TaskItem from './taskItem.jsx';
import FilterButton from './filterButtons.jsx';

// Component for the task list displayed
const TaskList = ({ tasks, setTasks, toggle }) => {
    const [completed, setCompleted] = useState(false);
    const [filter, setFilter] = useState("all");
    const [currentIndex, setIndex] = useState(1);

    // Function that deletes task based on id and filtering
    const deleteFunc = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    // Function that filters task list displayed in three states, changing every time it's clicked
    const filterFunc = () => {
        const number = 3; // 3 filter states
        setIndex((prev) => (prev + 1) % number);

        if (currentIndex === 1) {
            setFilter("completed");
        } else if (currentIndex === 2) {
            setFilter("not completed");
        } else {
            setFilter("all");
        }
    };

    return (
    <>
        <div class="taskList">
            <ul>
                {/* Button to change the three states for filtering */}
                <button class="filterFunc" onClick={filterFunc}> Filter </button>
                {/* When displaying all the tasks (map), return tasks based on completed state of object*/}
                {tasks
                .filter((task) => {
                    if (filter === "all") return true;
                    if (filter === "completed") return task.completed;
                    else return !task.completed;
                })
                .map((task) => (
                        // Call each task with taskItem component, bring deleteFunc from here and toggle from App.jsx
                        <li key={task.id}>
                            <TaskItem deleteFunc = {deleteFunc} id= {task.id} title={task.title} 
                            date={task.date} description={task.description} completed = {task.completed} setCompleted = {setCompleted} 
                            toggle = {() => toggle(task.id)}/>
                        </li>
                ))}
            </ul>
        </div>
        <div>
            {/* Filter component that displays what filter it is */}
            <FilterButton filter = {filter} />
        </div>
    </>
    )};
        
export default TaskList