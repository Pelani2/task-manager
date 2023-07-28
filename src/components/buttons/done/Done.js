import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./DoneStyles.scss";

const Done = ({isComplete, onClick, children }) => {
    const handleClick = () => {
        onClick();
    };

    const doneStyles = {
        backgroundColor: isComplete ? "green" : "#3f51b5",
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
    children: PropTypes.string.isRequired,
  };

export default Done;