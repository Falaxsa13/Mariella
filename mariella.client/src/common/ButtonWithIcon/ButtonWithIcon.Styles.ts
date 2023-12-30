import styled from "styled-components";

export const StyledButton = styled("button")<{ color?: string }>`
    background: ${(p) => p.color || "#2e186a"};
    color: ${(p) => (p.color ? "#2E186A" : "#fff")};
    font-size: 1rem;
    font-weight: 700;
    width: 100%;
    border: none;
    border-radius: 4px;
    padding: 13px 0;
    cursor: pointer;
    margin-top: 0.625rem;
    max-width: 180px;
    transition: all 0.3s ease-in-out;
    border-radius: 10px;

    &:hover,
    &:active,
    &:focus {
        color: #fff;
        border: 1px solid rgb(255, 130, 92);
        background-color: rgb(255, 130, 92);
    }
`;

export const ButtonContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;