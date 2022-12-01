import React from "react";

const ReportDeleteSubmit = ({ addDelRequest, handleDelRequest }) => {
    // console.log("addDelRequest in ReportDeleteSubmit", addDelRequest);
    // const showDelRequest = {
    //     display: "block"
    // };
    // const hideDelRequest = {
    //     display: "none"
    // }
    const show = () => {
        if (addDelRequest) {
            // console.log("show del dialog in ReportDeleteSubmit");
            return { display: "block" };
        } else {
            // console.log("hide del dialog in ReportDeleteSubmit");
            return { display: "none" };
        }
    };

    return (
        <>
            <div
                className="all-requests-background-delete-report"
                // style={addDelRequest?showDelRequest:hideDelRequest}
                style={show()}
            >
                <div className="all-requests-background-delete-report-name">
                    Вы точно хотите удалить этот отчет?
                </div>
                <button
                    className="all-requests-background-delete-report-submit"
                    form="deleteAnyReports"
                    type="submit"
                    // onClick={()=>handleDelRequest(false)}
                >
                    Удалить
                </button>
                <button
                    className="all-requests-background-delete-report-cancel"
                    onClick={() => handleDelRequest(false)}
                >
                    Отмена
                </button>
            </div>
        </>
    );
};

export default ReportDeleteSubmit;
