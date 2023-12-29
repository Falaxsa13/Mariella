import styled from 'styled-components';
import { Button } from '../../../common/Button';

const MainBox = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 20%;
    background-color: white;
    flex-direction: column;
    align-items: center;
    `

const Title = styled.h1`
    position: relative;
    padding-top: 1.5rem;
    margin-bottom: 0rem;
    font-size: 2rem;
    color: #925BF1;
    width: 100%;
    text-align: center;
`

const ButtonContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    
`
const UniversityButton = styled(Button)`
    height: 3rem;
`

const UniversitySection:React.FC = () => {
    return (
        <MainBox>
            <Title>Universidad</Title>
            <ButtonContainer>
                <UniversityButton color="#E4D6FC"> 
                    <div> 
                        <img src="/img/svg/AddIcon.svg" alt="AddIcon" />
                        <p className="Content"> Hola </p>
                    </div>
                </UniversityButton>
            </ButtonContainer>
        </MainBox>
);
}

export default UniversitySection;