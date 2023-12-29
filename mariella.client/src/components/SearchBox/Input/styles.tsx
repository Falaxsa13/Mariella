import styled, { StyledComponent } from "styled-components";

export const Container = styled("div")`
    display: flex;
    alignitems: center;
    width: 100%;
    padding: 10px 5px;
`;

export const StyledInput = styled("input")`
    font-size: 0.875rem;
    background-image: url("/img/svg/magnifyingGlass.svg");
    background-position: 10px 10px;
    background-repeat: no-repeat;
    padding: 12px 20px 12px 40px;
    :focus-within {
        background-image: url("/img/svg/magnifyingGlass.svg");
        background-repeat: no-repeat;
        background-position: 10px 10px;
        padding: 12px 20px 12px 40px;
    }
`;
