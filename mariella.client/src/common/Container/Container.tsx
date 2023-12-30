import { StyledContainer } from "./Container.Styles";
import { ContainerProps } from "../types";

const Container = ({ border, children }: ContainerProps) => (
    <StyledContainer border={border}>{children}</StyledContainer>
);

export default Container;
