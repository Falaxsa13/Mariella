import { StyledButton } from "./Button.Styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick }: ButtonProps) => (
    <StyledButton color={color} onClick={onClick}>
        {children}
    </StyledButton>
);
