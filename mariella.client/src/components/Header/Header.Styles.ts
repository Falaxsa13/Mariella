import styled from "styled-components";
import { SvgIcon } from "../../common/SvgIcon/SvgIcon";

export const LogoContainer = styled(SvgIcon)`
    width: 5vw;
    min-width: 100px;
    height: 100%;
    display: flex;
    margin-left: 2vw;
    margin-right: 2vw;
`;

export const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #b28bf6;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    height: 60px;
    width: 100%;
`;

export const StyledButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-right: 2vw;
    padding-left: 2vw;
    gap: 1vw;
    height: 95%;
`;
