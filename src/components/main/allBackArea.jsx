import React, { useState } from "react";
import LeftSidePanel from "./leftSidePanel";
import Reports from "./reports/reports";
import Requests from "./requestsWithBg/requests";
import Scanner from "./scanner/scanner";
import SearchPanel from "./searchPanel/searchPanel";
import fakeReportsList from "../../fake.api/fakeReportsList";
import reportTest from "../../fake.api/response_report.json";
import allReportsTest from "../../fake.api/response_all_reports.json";

const AllBackArea = () => {
    const [addNewTask, setAddNewTask] = useState(false);
    const [addDelRequest, setAddDelRequest] = useState(false);
    const [allRepList] = useState(
        JSON.parse(JSON.stringify(allReportsTest.items))
    );
    const [reportsList, setReportsList] = useState(allRepList);
    const handleNewTask = () => {
        addNewTask ? setAddNewTask(false) : setAddNewTask(true);
    };
    const handleDelRequest = (state) => {
        setAddDelRequest(state);
    };
    const handleReportsList = (url) => {
        const newArray = allRepList.filter((report) =>
            report.url.includes(url)
        );
        setReportsList(newArray);
    };
    return (
        <>
            <div className="all-off-area">
                <Requests
                    addNewTask={addNewTask}
                    addDelRequest={addDelRequest}
                    handleDelRequest={handleDelRequest}
                    handleNewTask={handleNewTask}
                />
                <LeftSidePanel />
                <Scanner
                    handleReportsList={handleReportsList}
                    reportsList={reportsList}
                />
                <SearchPanel
                    addNewTask={handleNewTask}
                    handleReportsList={handleReportsList}
                />
                <Reports
                    handleDelRequest={handleDelRequest}
                    reportsList={reportsList}
                />
            </div>
        </>
    );
};

export default AllBackArea;
