import { StyledContent } from "./ContentBlock.Styles";

interface ContentBlockProps {
  children: React.ReactNode;
}

const ContentSection = (props: ContentBlockProps) => (
  <StyledContent>{props.children}</StyledContent>
);

export default ContentSection;
