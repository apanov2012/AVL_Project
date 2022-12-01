import React from "react";

const ReportBody = ({ item, handleCurrentReport }) => {
    const handleClickOnReport = () => {
        handleCurrentReport(item);
    };
    return (
        <>
            <div
                className="reports-list-report-block"
                onClick={handleClickOnReport}
            >
                <div className="reports-list-report-block-link">
                    {item.email}
                </div>
                <div className="reports-list-report-block-task-description">
                    {item.testType}
                </div>
                <div className="reports-list-report-block-date">
                    <div className="reports-list-report-block-date-report-create">
                        Дата создания: {item.createDate}
                    </div>
                    <div className="reports-list-report-block-date-report-ready">
                        Дата отчета: {item.reportDate}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReportBody;
