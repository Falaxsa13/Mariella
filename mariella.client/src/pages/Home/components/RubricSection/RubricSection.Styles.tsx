import styled from "styled-components";

export const RubricSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActionsContainer = styled.div`
  display: flex;
  padding: 18px 49px;
  align-items: center;
  gap: 69px;
  background-color: #722aee;
  border-radius: 12px;
`;

export const ButtonStyledSpan = styled.span`
  color: #722aee;
  font-weight: 400;
  font-style: normal;
`;

export const StyledTable = styled.table`
  position: absolute;
  font-size: 16px;
  border-spacing: 100px;
  text-align: center;
  font-weight: bold;
  td,
  th {
    padding: 10px;
  }
  tr {
    border-bottom: 2px solid #b28bf6;
  }
  tbody {
    tr {
      :hover {
        transition: all 0.3s ease-in-out;
        background-color: #cbb4f5;
      }
    }
  }
`;

export const StyledSpan = styled.span`
  color: #4000b0;
  text-align: center;
  font-family: Motiva Sans;
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const RubricSectionBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  height: 20rem;
`;
