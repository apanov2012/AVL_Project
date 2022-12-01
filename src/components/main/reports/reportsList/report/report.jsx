import React from "react";
import ReportBody from "./reportBody";
import ReportCheckBox from "./reportCheckBox";

const Report = ({ delButDisplay, item, onChange, handleCurrentReport }) => {
    return (
        <>
            <div className="reports-list-report-block-back">
                <ReportCheckBox
                    delButDisplay={delButDisplay}
                    item={item}
                    onChange={onChange}
                />
                <ReportBody
                    item={item}
                    handleCurrentReport={handleCurrentReport}
                />
            </div>
        </>
    );
};

export default Report;
