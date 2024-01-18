import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./Input.Styles";
import { Label } from "../TextArea/TextArea.Styles";
import { TFunction } from "i18next";

export interface InputProps {
  name: string;
  placeholder: string;
  t: TFunction;
  type?: string;
  value?: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  className?: string;
}

const Input = (props: InputProps) => (
  <Container>
    <Label htmlFor={props.name}>{props.t(props.name || "")}</Label>
    <StyledInput
      className={props.className}
      placeholder={props.t(props.placeholder)}
      name={props.name}
      id={props.name}
      onChange={props.onChange}
    />
  </Container>
);

export default withTranslation()(Input);
