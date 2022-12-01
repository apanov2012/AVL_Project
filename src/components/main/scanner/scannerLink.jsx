import React from "react";

const ScannerLink = ({ email, handleFilter }) => {
    const handleClick = ({ target }) => {
        handleFilter(target.textContent);
    };
    return (
        <>
            <div
                className="scanner-links-list-link"
                onClick={handleClick}
            >
                {email}
            </div>
        </>
    );
};

export default ScannerLink;
