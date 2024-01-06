import { DialogContainer, Content } from "./Dialog.Styles";

interface DialogProps {
    isOpen: boolean;
    onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Dialog = (props: DialogProps) => {
    if (!props.isOpen) return null;

    return (
        <DialogContainer>
            <Content>
                <h1>Hello</h1>
            </Content>
        </DialogContainer>
    );
};

export default Dialog;
