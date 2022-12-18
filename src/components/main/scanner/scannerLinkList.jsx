import React, { useEffect, useState } from "react";
import ScannerLink from "./scannerLink";

const ScannerLinkList = ({ handleReportsList, reportsList }) => {
    const [filteredList, setfilteredList] = useState();
    const handleFilter = (url) => {
        handleReportsList(url);
    };
    const regExpWww = /[w][w][w]\.(.*)/;
    const regExpHttp = /https:\/\/www\.(.*)$/;
    useEffect(() => {
        const tempList = reportsList.reduce((filteredArr, tempReport) => {
            if (!filteredArr.find((report) => report.url === tempReport.url)) {
                filteredArr.push(tempReport);
            }
            return filteredArr;
        }, []);
        setfilteredList(tempList);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
        <>
            <div className="scanner-links-list">
                {filteredList
                    ? filteredList.map((report) => (
                          <ScannerLink
                              email={report.url.split(regExpHttp)}
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
