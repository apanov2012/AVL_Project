import React, { useEffect, useState } from "react";
import AddTaskForm from "./addTaskForm";
import OpacityBg from "./opacityBg";
import ReportDeleteSubmit from "./reportDeleteSubmit";

const Requests = ({
    addNewTask,
    handleNewTask,
    addDelRequest,
    handleDelRequest
}) => {
    const [visibleOpacityBg, setVisibleOpacityBg] = useState(false);
    useEffect(() => {
        setVisibleOpacityBg(addDelRequest || addNewTask);
    }, [addDelRequest, addNewTask]);
    const showReqBg = {
        zIndex: 110
    };
    const hideReqBg = {
        zIndex: -1
    };

    return (
        <>
            <div
                className="all-requests-background"
                style={visibleOpacityBg ? showReqBg : hideReqBg}
            >
                <AddTaskForm
                    visibleAddTaskForm={addNewTask}
                    closeAddTaskForm={() => handleNewTask()}
                />
                <ReportDeleteSubmit
                    addDelRequest={addDelRequest}
                    handleDelRequest={handleDelRequest}
                />
            </div>
            <OpacityBg visibleOpacityBg={visibleOpacityBg} />
        </>
    );
};

export default Requests;
