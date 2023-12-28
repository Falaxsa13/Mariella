import styled from 'styled-components';

const MainBox = styled.div`
    position: absolute;
    top: 15%;
    left: 65%;
    width: 30%;
    height: 75%;
    background-color: white;
    border-radius: 20px;
    `

const Banner = styled.div`
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 20%;
    background-image: url('/img/png/UserInfoBackground.png');
    background-size: cover;
    border-radius: 20px 20px 0px 0px;
    `

const UserInformation:React.FC = () => {
    return (
        <MainBox>
            <Banner />
        </MainBox>
);

}

export default UserInformation;