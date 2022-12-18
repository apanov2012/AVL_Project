import React, { useEffect, useState } from "react";
import axios from "axios";

const SingleReport = ({ currentReport }) => {
    const [report, setReport] = useState();
    useEffect(() => {
        currentReport ? setReport(currentReport.result.message) : setReport();
    }, [currentReport]);
    const handleDowloadReport = () => {
        console.log("DownLoad report in SingleReport");
    };
    const handleDeleteReport = () => {
        console.log("Delete report in SingleReport");
    };
    return (
        <>
            {report && (
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
                            {report.goal}
                        </div>
                        {report.vectors.map((point) => (
                            <div key={currentReport.id + Math.random()}>
                                <h5>{point.date}</h5>
                                <h5>{point.description}</h5>
                                <p>{point.name}</p>
                                <p>{point.status}</p>
                                <hr />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default SingleReport;
