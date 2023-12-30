import { withTranslation } from "react-i18next";
import { StyledButton, ButtonContainer } from "./ButtonWithIcon.Styles";
import { ButtonWithIconProps } from "../types";
import { SvgIcon } from "../SvgIcon/SvgIcon";

export const ButtonWithIcon = ({
    color,
    onClick,
    text,
    icon,
    t,
}: ButtonWithIconProps) => (
    <StyledButton color={color} onClick={onClick}>
        <ButtonContainer>
            <SvgIcon {...icon} />
            {t(text)}
        </ButtonContainer>
    </StyledButton>
);

export default withTranslation()(ButtonWithIcon);
