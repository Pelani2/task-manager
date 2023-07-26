import React, { useState } from "react";

export default function TaskListView() {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const handleTaskCheckboxChange = (taskId) => {
        setTasks((prevTasks) => 
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isComplete: !task.isComplete } : task
            )
        );
    };

    const handleAddTask = () => {
        if (newTaskTitle.trim() === "") {
            return;
        }

        const newTask = {
            id: Date.now(),
            title: newTaskTitle,
            isComplete: false,
        };

        setTasks((prevTasks) => [ ...prevTasks, newTask ]);
        setNewTaskTitle("");
    };

    return(
        <div>
            <h1>
                Task Manager
            </h1>
            <div>
                <input 
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                />
                <button onClick={handleAddTask}>
                    Create Task
                </button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input 
                            type="checkbox"
                            checked={task.isComplete}
                            onChange={() => handleTaskCheckboxChange(task.id)}
                        />
                        <span style={{
                            textDecoration: task.isComplete ? "line-through" : "none"
                        }}>
                            {task.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}