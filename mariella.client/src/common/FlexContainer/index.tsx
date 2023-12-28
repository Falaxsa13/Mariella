import { FlexContainerProps } from "../types";

const FlexContainer = ({ width, maxWidth, height, children }: FlexContainerProps) => (
  <div style={{ width, height, maxWidth}}> {children} </div>
);

export default FlexContainer;