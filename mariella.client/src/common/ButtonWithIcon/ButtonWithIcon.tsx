import { withTranslation } from "react-i18next";
import { StyledButton, ButtonContainer } from "./ButtonWithIcon.Styles";
import { ButtonWithIconProps } from "../types";
import { SvgIcon } from "../SvgIcon/SvgIcon";

export const ButtonWithIcon = ({
    color,
    onClick,
    text,
    fontSize,
    icon,
    t,
    height,
    width,
}: ButtonWithIconProps) => (
    <StyledButton color={color} onClick={onClick} height={height} width={width}>
        <ButtonContainer fontSize={fontSize}>
            <SvgIcon {...icon} />
            {t(text)}
        </ButtonContainer>
    </StyledButton>
);

export default withTranslation()(ButtonWithIcon);
