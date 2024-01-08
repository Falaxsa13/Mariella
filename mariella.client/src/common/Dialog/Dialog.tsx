import ReactDOM from "react-dom";
import { DialogContainer, Content } from "./Dialog.Styles";
import { Button } from "../Button/Button";

interface DialogProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Dialog = (props: DialogProps) => {
    if (!props.isOpen) return null;

    const component = (
        <DialogContainer>
            <Content>
                {props.children}
            </Content>
        </DialogContainer>
    );

    return ReactDOM.createPortal(component, document.body);
};

export default Dialog;
