import React from "react";
import "./TaskFilterAndSorting.scss";

export default function TaskFilterAndSorting() {
    return(
        <section className="task-filter-sort">
            <div className="filter-section">
                <label htmlFor="status-filter">
                    Status: 
                </label>
                <select id="status-filter">
                    <option value="">
                        All
                    </option>
                    <option value="completed">
                        Completed
                    </option>
                    <option value="in-progress">
                        In Progress
                    </option>
                    <option value="overdue">
                        Overdue
                    </option>
                </select>
            </div>

            <div className="sort-section">
                <label htmlFor="sort-by">
                    Sort By:
                </label>
                <select id="sort-by">
                    <option value="default">
                        Default
                    </option>
                    <option value="priority">
                        Priority                
                    </option>
                    <option value="due-date">
                        Due Date
                    </option>
                    <option value="title">
                        Title
                    </option>
                </select>
                <label htmlFor="sort-order">
                    Order:
                </label>
                <select>
                    <option value="asc">
                        Ascending
                    </option>
                    <option value="desc">
                        Descending
                    </option>
                </select>
            </div>
        </section>
    );
}