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

        </div>
    );
}