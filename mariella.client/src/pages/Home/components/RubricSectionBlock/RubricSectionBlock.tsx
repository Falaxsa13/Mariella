import {
    RubricSectionBlockContainer,
    StyledSpan,
} from "./RubricSectionBlock.Styles";

interface RubricSectionBlockProps {
    title: string;
    children: React.ReactNode;
}

const RubricSectionBLock = (props: RubricSectionBlockProps) => (
    <RubricSectionBlockContainer>
        <StyledSpan>{props.title}</StyledSpan>
        {props.children}
    </RubricSectionBlockContainer>
);

export default RubricSectionBLock;
