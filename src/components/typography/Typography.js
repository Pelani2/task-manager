import React from "react";
import "./TypographyStyles.scss";

export default function Typography({ text }) {
    return(
        <h1
            className="typography"
        >
            {text}
        </h1>
    );
}