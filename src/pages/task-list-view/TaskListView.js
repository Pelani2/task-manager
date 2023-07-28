import React, { useState } from "react";
import Done from "../../components/buttons/done/Done";
import CreateTask from "../../components/buttons/create-task/CreateTask";
import DeleteAll from "../../components/buttons/delete-all/DeleteAll";
import Typography from "../../components/typography/Typography";
import Input from "../../components/input/Input";
import "./TaskListView.scss";

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

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleAddTask();
        }
    };

    const handleDeleteAllTasks = () => {
        setTasks([]);
    };

    return(
        <div className="task-manager">
            <Typography 
                text="Task Manager"
                
            />
            <div className="task-manager__content">
                <Input 
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    onKeyPress={handleKeyPress}
                />

                <CreateTask 
                    onClickProp={handleAddTask}
                    textProp="Create Task"
                />
                
            </div>
            <ul className="task-manager__list">
                {tasks.map((task) => (
                    <li 
                        key={task.id}
                        className="task-manager__list-item"
                    >
                        <Done 
                            isComplete={task.isComplete}
                            onClick={() => handleTaskDone(task.id)}
                        >
                            {task.isComplete ? "✓" : "Done"}
                        </Done>
                        <span 
                            style={{
                                textDecoration: task.isComplete ? "line-through" : "none",
                            }}
                            className="task-manager__task-title"
                        >
                            {task.title}
                        </span>
                    </li>
                ))}
                <DeleteAll 
                    text="Delete All"
                    onClick={handleDeleteAllTasks}
                />
            </ul>
        </div>
    );
}