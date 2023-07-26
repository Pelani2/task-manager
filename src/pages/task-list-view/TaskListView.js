import React, { useState } from "react";

export default function TaskListView() {
    const initialTasks = [
        {
            id: 1, title: "Task 1", isComplete: false,
            id: 2, title: "Task 2", isComplete: true,
            id: 3, title: "Task 3", isComplete: false,
        }
    ];

    const [tasks, setTasks] = useState(initialTasks);

    const handleTaskCheckboxChange = (taskId) => {
        setTasks((prevTasks) =>
        prevTasks.map((task) => 
        task.id === taskId ? { ...task, isComplete: !task.isComplete} : task
            )
        );
    };

    return(
        <div>
            <h1>
                Task Manager
            </h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <input 
                            type="checkbox"
                            checked={task.isComplete}
                            onChange={() => handleTaskCheckboxChange(task.id)}
                        />
                        <span
                            style={{
                                textDecoration: task.isComplete ? "line-through" : "none"
                            }}
                        >
                            {task.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}