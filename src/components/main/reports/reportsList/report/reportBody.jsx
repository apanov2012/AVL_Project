import React from "react";

const ReportBody = ({ item, handleCurrentReport }) => {
    const handleClickOnReport = () => {
        handleCurrentReport(item);
    };
    const report = item.result.message;
    return (
        <>
            {report && (
                <div
                    className="reports-list-report-block"
                    onClick={handleClickOnReport}
                >
                    <div className="reports-list-report-block-link">
                        {report.goal}
                    </div>
                    <div className="reports-list-report-block-task-description">
                        {report.action}
                    </div>
                    <div className="reports-list-report-block-date">
                        <div className="reports-list-report-block-date-report-create">
                            Дата создания: {report.reportDate}
                        </div>
                        <div className="reports-list-report-block-date-report-ready">
                            Дата отчета: {report.reportDateEnd}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ReportBody;
