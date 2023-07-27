import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./DoneStyles.scss";

const Done = ({isComplete, onClick, children }) => {
    const handleClick = () => {
        onClick();
    };

    const doneStyles = {
        backgroundColor: isComplete ? "green" : "transparent",
        border: "1px solid black",
        padding: "5px 10px",
        borderRadius: "5px",
        marginRight: "10px",
        cursor: "pointer",
    };

    return(
        <button
            className={classNames("done-button", { "is-complete" : isComplete})}
            style={doneStyles}
            onClick={handleClick}
        >
            {children}
        </button>
    );
};

Done.propTypes = {
    isComplete: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired, // Use "string" instead of "node"
  };

export default Done;