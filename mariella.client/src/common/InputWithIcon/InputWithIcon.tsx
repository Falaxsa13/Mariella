import { withTranslation } from "react-i18next";
import { InputWithIconProps } from "../types";
import {
    Container,
    IconContainer,
	InputContainer,
	StyledInput
} from "./InputWithIcon.Styles";
import { SvgIcon } from "../SvgIcon/SvgIcon";

const InputWithIcon = ({ placeholder, t, icon }: InputWithIconProps) => (
    <Container>
        <IconContainer>
            <SvgIcon {...icon} />
        </IconContainer>
        <InputContainer>
            <StyledInput placeholder={placeholder} />
        </InputContainer>
    </Container>
);

export default withTranslation()(InputWithIcon);
