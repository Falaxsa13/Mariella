import { MainContainer } from "./FlexContainer.Styles";

export interface FlexContainerProps {
    children: React.ReactNode;
    width?: string;
    maxHeight?: string;
    maxWidth?: string;
}

const FlexContainer = ({
    width,
    maxWidth,
    maxHeight,
    children,
}: FlexContainerProps) => (
    <MainContainer style={{ width, maxWidth, maxHeight }}>
        {children}
    </MainContainer>
);

export default FlexContainer;
