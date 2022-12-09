import React from "react";

const SearchInput = ({ handleReportsList }) => {
    const handleChange = ({ target }) => {
        handleReportsList(target.value);
    };
    return (
        <>
            <button
                className="search-panel-search-submit-button"
                type="submit"
            ></button>
            <input
                className="search-panel-input-search-area"
                type="text"
                placeholder="Поиск..."
                onChange={handleChange}
            />
        </>
    );
};

export default SearchInput;
