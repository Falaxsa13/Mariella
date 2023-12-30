import styled, { StyledComponent } from "styled-components";
import Input from "../../common/Input";

export const SearchBoxContainer: StyledComponent<"div", any> = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 40vw;
    height: 80%;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 0 15px;
    border: 0.5px solid black;
`;

export const StyledInput = styled(Input)`
    background-color: black;
    color: black;
`;

// HEADER  ->  ICON    SEARCHBOX    BTN 1   BTN 2   BTN3
