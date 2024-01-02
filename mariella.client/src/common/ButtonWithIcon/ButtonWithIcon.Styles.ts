import styled from "styled-components";

export const ButtonContainer = styled.div<{ fontSize?: string }>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-size: ${(p) => p.fontSize || "1rem"};
`;

export const StyledButton = styled.button`
    display: flex;
    align-items: center;
    background: var(--color, #2e186a);
    font-weight: 700;
    width: var(--width, 170px);
    height: var(--height, 10px);
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
