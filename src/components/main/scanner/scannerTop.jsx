import React from "react";

const ScannerTop = ({ handleReportsList }) => {
    // const handleClick = () => {
    //     console.log("OnControl in ScannerTop");
    // };
    const clearFilter = () => {
        handleReportsList("");
    };
    return (
        <>
            <div className="top-info-block-scanner">
                <div className="scanner-name">Сканнер</div>
                {/* <div
                    className="scanner-on-control"
                    onClick={handleClick}
                >
                    <div className="scanner-on-control-clock"></div>
                    <div className="scanner-on-control-name">На контроле</div>
                </div> */}
                <div className="scanner-url">URL</div>
                <div
                    className="scanner-clear-filter "
                    onClick={clearFilter}
                ></div>
            </div>
        </>
    );
};

export default ScannerTop;
