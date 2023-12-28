import { useState } from "react";
import { SvgIcon } from "../../common/SvgIcon";
import SearchBox from "../../components/SearchBox"
import "./styles.css";

const Header = () => {
    return (
        <header className="header">
            <SvgIcon src="logo.svg" width="301px" height="80px" />
			<SearchBox />
        </header>
    );
};

export default Header;