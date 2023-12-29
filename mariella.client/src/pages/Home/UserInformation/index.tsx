import styled from 'styled-components';
import UniversitySection from './UniversitySection';
import Banner from './Banner';

const MainBox = styled.div`
    position: absolute;
    top: 15%;
    left: 65%;
    width: 30%;
    height: 75%;
    background-color: white;
    border-radius: 20px;
    `

const UserInformation:React.FC = () => {
    return (
        <MainBox>
            <Banner />
            <UniversitySection />
        </MainBox>
);

}

export default UserInformation;