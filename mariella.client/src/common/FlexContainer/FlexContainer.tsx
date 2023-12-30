import { FlexContainerProps } from "../types";
import { MainContainer } from "./FlexContainer.Styles";

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
