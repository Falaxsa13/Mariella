import { FlexContainerProps } from "../types";
import "./styles.css";

const FlexContainer = ({ width, maxWidth, maxHeight, children }: FlexContainerProps) => (
  <div className="MainContainer" style={{width, maxWidth, maxHeight}}> {children} </div>
);

export default FlexContainer;