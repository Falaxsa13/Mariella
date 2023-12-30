import React, { useState } from "react";
import { SearchBoxContainer, StyledInput, StyledSvgIcon } from "./SearchBox.Styles";
import { Empty } from "antd";

const SearchBox: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = () => {
        console.log("Searching for: ", searchValue);
    };

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return null;
};

export default SearchBox;
