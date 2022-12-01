import React from "react";

const ReportCheckBox = ({ delButDisplay, item, onChange }) => {
    const hideLabel = {
        display: "none"
    };
    const unhideLabel = {
        display: "inline"
    };
    return (
        <>
            <input
                type="checkbox"
                className="reports-list-report-block-back-input-checkbox"
                id={item.id}
                value={item.id} //уникальный идентификатор
                name={item.id}
                onChange={onChange}
            />
            <label
                htmlFor={item.id}
                className="reports-list-report-block-back-input-checkbox-label"
                style={delButDisplay ? hideLabel : unhideLabel}
            ></label>
        </>
    );
};

export default ReportCheckBox;
