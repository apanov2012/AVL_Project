import React, { useState } from "react";
import LeftSidePanel from "./leftSidePanel";
import Reports from "./reports/reports";
import Requests from "./requestsWithBg/requests";
import Scanner from "./scanner/scanner";
import SearchPanel from "./searchPanel/searchPanel";
import fakeReportsList from "../../fake.api/fakeReportsList";

const AllBackArea = () => {
    const [addNewTask, setAddNewTask] = useState(false);
    const [addDelRequest, setAddDelRequest] = useState(false);
    const [fakeRepList] = useState(fakeReportsList);
    const [reportsList, setReportsList] = useState(fakeRepList);
    const handleNewTask = () => {
        addNewTask ? setAddNewTask(false) : setAddNewTask(true);
    };
    const handleDelRequest = (state) => {
        setAddDelRequest(state);
    };
    const handleReportsList = (email) => {
        const newArray = fakeRepList.filter((report) => report.email === email);
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
                <SearchPanel addNewTask={handleNewTask} />
                <Reports
                    handleDelRequest={handleDelRequest}
                    reportsList={reportsList}
                />
            </div>
        </>
    );
};

export default AllBackArea;
