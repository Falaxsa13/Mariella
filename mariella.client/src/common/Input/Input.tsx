import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./Input.Styles";
import { Label } from "../TextArea/TextArea.Styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, onChange, t, className }: InputProps) => (
    <Container>
        <Label htmlFor={name}>{t(name || "")}</Label>
        <StyledInput
            className={className}
            placeholder={t(placeholder)}
            name={name}
            id={name}
            onChange={onChange}
        />
    </Container>
);

export default withTranslation()(Input);
