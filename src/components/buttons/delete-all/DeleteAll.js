import React from "react";
import "./DeleteAllStyles.scss";

export default function DeleteAll({ text, onClick }) {
    return(
        <button
            className="delete-all-button"
            onClick={onClick}
        >
            {text}
        </button>
    );
}