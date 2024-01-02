import { withTranslation } from "react-i18next";
import {
    Container,
    IconContainer,
    InputContainer,
    StyledInput,
} from "./InputWithIcon.Styles";
import { TFunction } from "i18next";
import { SvgIcon, SvgIconProps } from "../SvgIcon/SvgIcon";

interface InputWithIconProps {
    placeholder: string;
    t: TFunction;
    icon: SvgIconProps;
}

const InputWithIcon = (props: InputWithIconProps) => (
    <Container>
        <IconContainer>
            <SvgIcon {...props.icon} />
        </IconContainer>
        <InputContainer>
            <StyledInput placeholder={props.placeholder} />
        </InputContainer>
    </Container>
);

export default withTranslation()(InputWithIcon);
