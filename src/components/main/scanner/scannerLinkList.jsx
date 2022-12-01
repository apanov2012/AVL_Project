import React, { useEffect, useState } from "react";
import ScannerLink from "./scannerLink";

const ScannerLinkList = ({ handleReportsList, reportsList }) => {
    const [filteredList, setfilteredList] = useState();
    const handleFilter = (email) => {
        handleReportsList(email);
        // console.log(reportsList.filter((report) => report.email === email));
    };
    useEffect(() => {
        const tempList = reportsList.reduce((filteredArr, tempReport) => {
            if (
                !filteredArr.find((report) => report.email === tempReport.email)
            ) {
                filteredArr.push(tempReport);
            }
            return filteredArr;
        }, []);
        setfilteredList(tempList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // console.log("filteredList in ScannerLinkList", filteredList);
    return (
        <>
            <div className="scanner-links-list">
                {filteredList
                    ? filteredList.map((report) => (
                          <ScannerLink
                              email={report.email}
                              key={report.id}
                              handleFilter={handleFilter}
                          />
                      ))
                    : "Loading..."}
            </div>
        </>
    );
};

export default ScannerLinkList;
