import React from "react";

const ReportsPages = ({ handleStartReportNum, countOfPages, currentPage }) => {
    return (
        <>
            <div className="top-info-block-reports-list-left-pagination-arrow"
                onClick={
                    currentPage>1
                    ?()=>handleStartReportNum(-8)
                    :()=>handleStartReportNum(0)
                }
            ></div> 
            <div className="top-info-block-reports-list-left-pagination-current-page">
                {currentPage}
            </div>
            <div className="top-info-block-reports-list-left-pagination-count-pages">
                {countOfPages}
            </div>
            <div className="top-info-block-reports-list-right-pagination-arrow"
                onClick={
                    currentPage>0 && currentPage<countOfPages
                    ?()=>handleStartReportNum(8)
                    :()=>handleStartReportNum(0)
                }
            ></div>
        </>
    );
};
 
export default ReportsPages;
