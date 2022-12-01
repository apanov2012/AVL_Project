import React from "react";

const CountOfReports = ({ countOfReports }) => {
    return (
        <>
            <div className="top-info-block-reports-list-left-pagination-count-reports">
                Всего:{countOfReports}
            </div>
        </>
    );
};
 
export default CountOfReports;
