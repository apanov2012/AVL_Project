import React, { useState, useLayoutEffect, useEffect } from "react";
import ReportsDeleteForm from "./reportsDeleteForm";
import ReportsListTop from "./reportTop/reportsListTop";

const ReportsList = ({ handleDelRequest, reports, handleCurrentReport }) => {
    const [display, setDisplay] = useState(true);
    const handleDelButDisplay = () => {
        display ? setDisplay(false) : setDisplay(true);
    };
    const [visibleReports, setVisibleReports] = useState(reports);
    const handleVisibleReports = (updatedReports) => {
        setVisibleReports(updatedReports);
    };
    useEffect(() => {
        setVisibleReports(reports);
    }, [reports]);
    useLayoutEffect(() => {
        document.addEventListener("keydown", detectKeyDown, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [display]);
    const detectKeyDown = (event) => {
        if (event.code === "Escape" && !display) {
            handleDelButDisplay();
        }
    };
    return (
        <>
            <div className="reports-list-back">
                <ReportsListTop
                    handleDelButDisplay={handleDelButDisplay}
                    delButDisplay={display}
                    setReports={handleVisibleReports}
                    reports={reports}
                />
                <ReportsDeleteForm
                    handleDelButDisplay={handleDelButDisplay}
                    delButDisplay={display}
                    handleDelRequest={handleDelRequest}
                    reports={visibleReports}
                    handleCurrentReport={handleCurrentReport}
                />
            </div>
        </>
    );
};

export default ReportsList;
