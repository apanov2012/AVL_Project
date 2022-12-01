import React from "react";

const OpacityBg = ({ visibleOpacityBg }) => {
    const showOpacityBg ={
        display: "block"
    }
    const hideOpacityBg = {
        display: "none"
    }
    return (
        <>
            <div 
                className="all-requests-opacity-background"
                style={visibleOpacityBg?showOpacityBg:hideOpacityBg}    
            ></div>
        </>
    );
}
 
export default OpacityBg;
