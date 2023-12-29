import React, { useState } from "react";
import { SvgIcon } from "../../common/SvgIcon";
import Input from "./Input";

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
        <>
            <Input placeholder="Buscar rúbrica" />
        </>
    );
};

export default SearchBox;
