import React from "react";
import Logo from "./logo";
import Menu from "./menu";
import User from "./user";

const Header = () => {
    return (
        <>
            <header className="header-max-width">
                <div className="header">
                    <Logo/>
                    <div className="menu-and-user">
                        <Menu/>
                        <User/>
                    </div>
                </div>
            </header>
        </>
    );
};
 
export default Header;
