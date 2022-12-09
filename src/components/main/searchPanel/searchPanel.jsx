import React from "react";
import AddTask from "./addTask";
import SearchInput from "./searchInput";

const SearchPanel = ({ addNewTask, handleReportsList }) => {
    return (
        <>
            <div className="search-panel">
                <AddTask addNewTask={addNewTask} />
                <SearchInput handleReportsList={handleReportsList} />
            </div>
        </>
    );
};

export default SearchPanel;
