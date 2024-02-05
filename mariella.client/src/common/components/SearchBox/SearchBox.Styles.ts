import styled, { StyledComponent } from "styled-components";
import Input from "../Input/Input";
import { SvgIcon } from "../SvgIcon/SvgIcon";

export const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  width: 40vw;
  margin: 0px 15px 10px;
`;

export const StyledInput = styled(Input)`
  max-height: 13px;
  padding-left: 35px;
`;

export const StyledSvgIcon = styled(SvgIcon)`
  position: absolute;
  margin-left: 15px;
  margin-top: 6px;
`;