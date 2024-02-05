import styled from "styled-components";

export const MainBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 20%;
  background-color: white;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  position: relative;
  padding-top: 1.5rem;
  margin-bottom: 0rem;
  font-size: 2rem;
  color: #925bf1;
  width: 100%;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  position: relative;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  grid-gap: 1rem;
`;
