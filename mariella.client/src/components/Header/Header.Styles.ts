import styled from "styled-components";
import { SvgIcon } from "../../common/SvgIcon/SvgIcon";

export const LogoContainer = styled(SvgIcon)`
    width: 15vw;
    min-width: 200px;
    height: 100%;
    display: flex;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b28bf6;
    border-radius: 50%;
    height: 100%;
    width: 50px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: white;
    height: 60px;
    width: 100%;
    padding-top: 0.65vh;
    padding-bottom: 0.65vh;
`;
