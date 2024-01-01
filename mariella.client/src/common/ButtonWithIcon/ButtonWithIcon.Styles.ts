import styled from "styled-components";

export const ButtonContainer = styled.div<{ fontSize?: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: ${(p) => p.fontSize || "1rem"};
`;

export const StyledButton = styled.button<{
    color?: string;
    width?: string;
    height?: string;
}>`
    display: flex;
    align-items: center;
    background: ${(p) => p.color || "#2e186a"};
    color: ${(p) => (p.color ? "#2E186A" : "#fff")};
    font-weight: 700;
    width: ${(p) => p.width || "170px"};
    height: ${(p) => p.height || "10px"};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 0.625rem;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;

    &:hover,
    &:active,
    &:focus {
        background-color: rgb(233, 225, 247);
    }
`;
