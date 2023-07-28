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
        </section>
    );
}