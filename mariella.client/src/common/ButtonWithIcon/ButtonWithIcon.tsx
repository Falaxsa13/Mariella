import { withTranslation } from "react-i18next";
import { StyledButton, ButtonContainer } from "./ButtonWithIcon.Styles";
import { TFunction } from "react-i18next";
import { SvgIcon, SvgIconProps } from "../SvgIcon/SvgIcon";

interface ButtonWithIconProps {
    icon: SvgIconProps;
    color?: string;
    name?: string;
    onClick?: () => void;
    text: string;
    fontSize?: string;
    height?: string;
    width?: string;
    t: TFunction;
}

const ButtonWithIcon = (props: ButtonWithIconProps) => (
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
