import styled from 'styled-components';

export const CircleContainer = styled.div`
  position: absolute;
  left: 49%;
  top: 0;
  width: 1000px;
  height: 1000px;

  @media (max-width: 1050px) {
    
    img {
        width: 80%;
        height: 80%;
    }
  }

    @media (max-width: 900px) {

        left: 44%;
        top: 10%;
        img {
            width: 70%;
            height: 70%;
        }
    }

    @media (max-width: 660px) {
        display: none;
    }


  
`;

