import { withTranslation } from "react-i18next";
import { StyledButton, ButtonContainer } from "./ButtonWithIcon.Styles";
import { ButtonWithIconProps } from "../types";
import { SvgIcon } from "../SvgIcon/SvgIcon";

export const ButtonWithIcon = (props: ButtonWithIconProps) => (
    <StyledButton
        style={
            {
                "--color": props.color,
                "--height": props.height,
                "--width": props.width,
            } as React.CSSProperties
        }
    >
        <ButtonContainer fontSize={props.fontSize}>
            <SvgIcon {...props.icon} />
            {props.t(props.text)}
        </ButtonContainer>
    </StyledButton>
);

export default withTranslation()(ButtonWithIcon);
