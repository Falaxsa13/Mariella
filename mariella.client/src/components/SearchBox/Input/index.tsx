import { TFunction } from "i18next";
import { Container, StyledInput } from "./styles";
import { withTranslation } from "react-i18next";

export interface InputProps {
    placeholder: string;
    t: TFunction;
}

const Input = ({ placeholder, t }: InputProps) => (
    <Container>
        <StyledInput type="text" placeholder={t(placeholder)} />
    </Container>
);

export default withTranslation()(Input);
