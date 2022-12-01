import React from "react";

const SingleReport = ({ currentReport }) => {
    // console.log("currentReport in SingleReport", currentReport);
    const handleDowloadReport = () => {
        console.log("DownLoad report in SingleReport");
    };
    const handleDeleteReport = () => {
        console.log("Delete report in SingleReport");
    };
    return (
        <>
            <div className="open-report-area-back">
                <div className="top-info-block-report-area">
                    <div
                        className="top-info-block-report-area-download"
                        onClick={handleDowloadReport}
                    ></div>
                    <div
                        className="top-info-block-report-area-delete"
                        onClick={handleDeleteReport}
                    ></div>
                </div>
                <div className="open-report-area">
                    <div className="open-report-area-link">
                        {currentReport.email}
                    </div>
                    {currentReport.info}
                </div>
            </div>
        </>
    );
};

export default SingleReport;
