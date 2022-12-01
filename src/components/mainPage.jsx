import React from "react";
import Header from "./header/header";
import AllBackArea from "./main/allBackArea";

const MainPage = () => {
    return (
        <>
            <div className="main-page-background-block">
                <Header/>
                <AllBackArea/>
            </div>
        </>
    );
};
 
export default MainPage;
