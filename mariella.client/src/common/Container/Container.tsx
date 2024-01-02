import { StyledContainer } from "./Container.Styles";

interface ContainerProps {
    border?: boolean;
    children: React.ReactNode;
    width?: string;
}

const Container = ({ border, children }: ContainerProps) => (
    <StyledContainer border={border}>{children}</StyledContainer>
);

export default Container;
