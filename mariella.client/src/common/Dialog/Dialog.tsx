import ReactDOM from "react-dom";
import { DialogContainer, Content } from "./Dialog.Styles";

interface DialogProps {
    isOpen: boolean;
    children: React.ReactNode;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Dialog = (props: DialogProps) => {
    if (!props.isOpen) return null;

    return ReactDOM.createPortal(
        <DialogContainer>
            <Content>{props.children}</Content>
        </DialogContainer>,
        document.body
    );
};

export default Dialog;
