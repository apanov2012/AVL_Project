import React, { useEffect, useState } from "react";
import CountOfReports from "./countOfReports";
import ReportsPages from "./reportsPages";

const Pagination = ({ reports, setReports }) => {
    const [startReportNum, setStartReportNum] = useState(0)
    const handleStartReportNum = (num) => {
        if(countOfPages>=currentPage && currentPage >0){
            setStartReportNum(startReportNum+num);
        }
    };
    const countOfReports = reports.length;
    const pageSize = 8;
    const countOfPages = Math.ceil(countOfReports/pageSize); 
    let endReportNum = startReportNum+8 < countOfReports
        ? startReportNum+8
        : countOfReports
    ;
    const currentPage = Math.ceil(endReportNum/pageSize);
    const visibleReports = reports.slice(startReportNum,endReportNum);
    useEffect(()=> {
        setReports(visibleReports);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[startReportNum])
    return (
        <>
            <CountOfReports
                countOfReports={countOfReports}
            />
            <ReportsPages
                handleStartReportNum={handleStartReportNum}
                countOfPages={countOfPages}
                currentPage={currentPage}
                // reportArea={reportArea}
            />
        </>
    );
};

export default Pagination;
