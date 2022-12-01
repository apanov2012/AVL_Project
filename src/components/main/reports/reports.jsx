import React, { useState } from "react";
import ReportsList from "./reportsList/reportsList";
import SingleReport from "./singleReport/singleReport";

const Reports = ({ handleDelRequest, reportsList }) => {
    const [currentReport, setCurrentReport] = useState("");
    const handleCurrentReport = (item) => {
        setCurrentReport(item);
    };
    // console.log("reportsList", reportsList);
    return (
        <>
            <div className="reports-back">
                <ReportsList
                    handleDelRequest={handleDelRequest}
                    reports={reportsList}
                    handleCurrentReport={handleCurrentReport}
                />
                <SingleReport currentReport={currentReport} />
            </div>
        </>
    );
};

export default Reports;
