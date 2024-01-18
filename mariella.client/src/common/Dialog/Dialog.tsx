import ReactDOM from "react-dom";
import { DialogContainer, Content } from "./Dialog.Styles";

interface DialogProps {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
  shouldCloseOnEsc: boolean;
  shouldCloseOnClickOutside: boolean;
}

const Dialog = (props: DialogProps) => {
  if (!props.isOpen) return null;

  const handleContentClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const handleContainerClick = () => {
    if (props.shouldCloseOnClickOutside) {
      props.onClose();
    }
  };

  const component = (
    <DialogContainer onClick={handleContainerClick}>
      <Content onClick={handleContentClick}>{props.children}</Content>
    </DialogContainer>
  );

  return ReactDOM.createPortal(component, document.body);
};

export default Dialog;
