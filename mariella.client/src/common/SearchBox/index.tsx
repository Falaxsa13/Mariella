import React, { useState } from "react";
import { SvgIcon } from "../SvgIcon";
import Input from "./Input";
import { SearchBoxContainer } from "./styles";

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

    return (
        <SearchBoxContainer>
            <SvgIcon src="magnifyingGlass.svg" width="18px" height="18px" />
            <Input placeholder="Buscar rúbrica" />
        </SearchBoxContainer>
    );
};

export default SearchBox;
