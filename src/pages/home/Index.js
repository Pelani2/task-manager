import React from "react";
import TaskListView from "../task-list-view/TaskListView";
import TaskFilterAndSorting from "../task-filter-and-sorting/TaskFilterAndSorting";

export default function Index() {
    return(
        <div>
            <TaskListView />
            <TaskFilterAndSorting />
        </div>
    );
}