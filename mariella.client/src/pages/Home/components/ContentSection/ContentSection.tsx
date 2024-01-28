import { StyledContent } from "./ContentSection.Styles";

interface ContentSectionProps {
  children: React.ReactNode;
}

const ContentSection = (props: ContentSectionProps) => (
  <StyledContent>{props.children}</StyledContent>
);

export default ContentSection;
