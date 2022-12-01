import React, { useState } from "react";
import Report from "./report/report";
import ReportsDeleteButton from "./reportsDeleteButton";

const ReportsDeleteForm = ({
    handleDelButDisplay,
    delButDisplay,
    handleDelRequest,
    reports,
    handleCurrentReport
}) => {
    const [reportsFormData, setReportsFormData] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        handleDelRequest(false);
    };
    const handleChange = ({ target }) => {
        if (target.checked) {
            setReportsFormData((prev) => ({
                ...prev,
                [target.name]: target.value
            }));
        } else {
            let cutData = reportsFormData;
            delete cutData[target.name];
            setReportsFormData(cutData);
        }
    };
    return (
        <>
            <form
                className="reports-list"
                id="deleteAnyReports"
                onSubmit={handleSubmit}
            >
                <ReportsDeleteButton
                    handleDelButDisplay={handleDelButDisplay}
                    delButDisplay={delButDisplay}
                    handleDelRequest={handleDelRequest}
                    reportsFormData={reportsFormData}
                />
                {reports.map((item) => (
                    <Report
                        key={item.id}
                        delButDisplay={delButDisplay}
                        item={item}
                        onChange={handleChange}
                        handleCurrentReport={handleCurrentReport}
                    />
                ))}
            </form>
        </>
    );
};

export default ReportsDeleteForm;
