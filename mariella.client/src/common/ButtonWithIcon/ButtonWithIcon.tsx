import { withTranslation } from "react-i18next";
import { StyledButton, Container } from "./ButtonWithIcon.Styles";
import { TFunction } from "react-i18next";
import { SvgIcon, SvgIconProps } from "../SvgIcon/SvgIcon";
import { StyledComponent } from "styled-components";

interface ButtonWithIconProps {
    icon: SvgIconProps;
    color?: string;
    name?: string;
    onClick?: () => void;
    text: string;
    styledSpan?: StyledComponent<"span", any>;
    fontSize?: string;
    height?: string;
    width?: string;
    t: TFunction;
}

const ButtonWithIcon = (props: ButtonWithIconProps) => {
    const text = props.t(props.text);

    const spanComponent =
        props.styledSpan == undefined ? (
            <span>{text}</span>
        ) : (
            <props.styledSpan>{text}</props.styledSpan>
        );

    return (
        <StyledButton
            type="button"
            style={
                {
                    "--color": props.color,
                    "--height": props.height,
                    "--width": props.width,
                } as React.CSSProperties
            }
        >
            <Container
                style={{ "--fontSize": props.fontSize } as React.CSSProperties}
            >
                <SvgIcon {...props.icon} />
                {spanComponent}
            </Container>
        </StyledButton>
    );
};

export default withTranslation()(ButtonWithIcon);
