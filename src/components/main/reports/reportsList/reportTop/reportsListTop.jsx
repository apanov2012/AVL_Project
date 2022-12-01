import React from "react";
import Pagination from "./pagination";

const ReportsListTop = ({handleDelButDisplay, delButDisplay, setReports, reports}) => {
    const makeButVisible = {
        display: "inline"
    }
    const makeButUnvisible = {
        display: "none"
    }
    return (
        <>
            <div className="top-info-block-reports-list">
                <button 
                    className="top-info-block-reports-list-delete"
                    onClick={()=>handleDelButDisplay(true)}
                    style={delButDisplay
                            ?makeButVisible
                            :makeButUnvisible
                        }
                    >Удалить</button>
                <Pagination
                    setReports={setReports}
                    reports={reports}
                />
            </div>
        </>
    );
};
 
export default ReportsListTop;
