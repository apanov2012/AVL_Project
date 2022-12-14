import React from "react";

const ReportsDeleteButton = ({
    handleDelButDisplay,
    delButDisplay,
    handleDelRequest,
    reportsFormData
}) => {
    const hideDelButton = {
        display: "none"
    };
    const unhideDelButton = {
        display: "inline"
    };
    const createDelRequest = () => {
        handleDelButDisplay(false);
        if (reportsFormData !== undefined) {
            console.log(reportsFormData);
            handleDelRequest(true);
        }
    };
    return (
        <>
            <button
                type="button"
                className="delete-checked-reports"
                onClick={() => createDelRequest()}
                style={delButDisplay ? hideDelButton : unhideDelButton}
            ></button>
        </>
    );
};

export default ReportsDeleteButton;
