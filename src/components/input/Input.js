import React from "react";
import "./InputStyles.scss";

export default function Input({ type, value, onChange, onKeyPress }) {
    return(
        <input 
            type={type}
            value={value}
            onChange={onChange}
            onKeyPress={onKeyPress}
            className="input"
        />
    );
}