import React from "react";
import ScannerLinkList from "./scannerLinkList";
import ScannerTop from "./scannerTop";

const Scanner = ({ handleReportsList, reportsList }) => {
    // console.log("reportsList in Scanner", reportsList);
    return (
        <>
            <div className="scanner">
                <ScannerTop />
                <ScannerLinkList
                    reportsList={reportsList}
                    handleReportsList={handleReportsList}
                />
            </div>
        </>
    );
};

export default Scanner;
