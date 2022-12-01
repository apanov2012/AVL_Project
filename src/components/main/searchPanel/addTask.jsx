import React from "react";

const AddTask = ({ addNewTask }) => {
    return (
        <>
            <button
                className="add-task-in-search-panel"
                onClick={()=>addNewTask()}
            ></button>
        </>
    );
};
 
export default AddTask;
