import { StyledButton } from "./Button.Styles";

export interface ButtonProps {
  color?: string;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = (props: ButtonProps) => (
  <StyledButton color={props.color} onClick={props.onClick}>
    {props.children}
  </StyledButton>
);
