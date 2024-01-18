import { withTranslation, TFunction } from "react-i18next";
import { Container, TextWrapper, Content } from "./Block.Styles";

interface Props {
  title: string;
  content: string;
  t: TFunction;
}

const Block = ({ title, content, t }: Props) => {
  return (
    <Container>
      <h6>{t(title)}</h6>
      <TextWrapper>
        <Content>{t(content)}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
