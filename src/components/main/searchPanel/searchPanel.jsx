import React from "react";
import AddTask from "./addTask";
import SearchInput from "./searchInput";

const SearchPanel = ({ addNewTask }) => {
    return (
        <>
            <div className="search-panel">
                <AddTask
                    addNewTask={addNewTask}
                />
                <SearchInput/>
            </div>
        </>
     );
};
 
export default SearchPanel;
