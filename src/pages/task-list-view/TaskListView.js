import React, { useState } from "react";

export default function TaskListView() {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState("");

    const handleTaskDone = (taskId) => {
        setTasks((prevTasks) => 
            prevTasks.map((task) =>
                task.id === taskId ? { ...task, isComplete: true} : task
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

    const handleDeleteAllTasks = () => {
        setTasks([]);
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
                        <button
                            onClick={() => handleTaskDone(task.id)}
                            style={{
                                backgroundColor: task.isComplete ? "green" : "transparent",
                                border: "1px solid black",
                                padding: "5px 10px",
                                borderRadius: "5px",
                                marginRight: "10px",
                            }}
                        >
                            {task.isComplete ? "✓" : "Done"}
                        </button>
                        <span style={{
                            textDecoration: task.isComplete ? "line-through" : "none",
                        }}>
                            {task.title}
                        </span>
                    </li>
                ))}
                <button onClick={handleDeleteAllTasks}>
                    Delete All
                </button>
            </ul>
        </div>
    );
}