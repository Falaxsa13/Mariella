import styled from "styled-components";
import { MainBox, Title, ButtonContainer, UniversityButton } from "./University.Styles";

const UniversitySection: React.FC = () => {
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
};

export default UniversitySection;
