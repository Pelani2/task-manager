import React from "react";
import PropTypes from "prop-types";
import "./CreateTaskStyles.scss";

const CreateTask =  ({ onClickProp, textProp }) => {
    return(
        <button
            onClick={onClickProp}
            className="create-task-button"
        >
            {textProp}
        </button>
    );
};

CreateTask.propTypes = {
    onClickProp: PropTypes.func.isRequired,
    textProp: PropTypes.string
};

export default CreateTask;