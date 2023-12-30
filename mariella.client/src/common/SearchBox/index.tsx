import React, { useState } from "react";
import { SearchBoxContainer, StyledInput, StyledSvgIcon } from "./styles";

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
            <StyledSvgIcon
                src="magnifyingGlass.svg"
                width="18px"
                height="18px"
            />
            <StyledInput placeholder="Buscar rúbrica" onChange={handleSearch} />
        </SearchBoxContainer>
    );
};

export default SearchBox;
