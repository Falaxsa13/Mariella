import { Children } from "react";
import { DialogContainer, Content } from "./Dialog.Styles";

interface DialogProps {
    isOpen: boolean;
    childer: React.ReactNode;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Dialog = (props: DialogProps) => {
    if (!props.isOpen) return null;

    return (
        <DialogContainer>
            <Content>{Children}</Content>
        </DialogContainer>
    );
};

export default Dialog;
