import styled from "styled-components";
import { SvgIcon } from "../../common/SvgIcon";

export const IconContainer = styled(SvgIcon)`
    width: 15vw;
    min-width: 200px;
    height: 100%;
    display: flex;
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    background-color: white;
    height: 6.48vh;
    max-height: 100px;
    width: 100%;
    padding-top: 0.65vh;
    padding-bottom: 0.65vh;
`;
