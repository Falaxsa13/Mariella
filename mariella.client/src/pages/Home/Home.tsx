import Header from "../../components/Header/Header";
import FlexContainer from "../../common/FlexContainer/FlexContainer";
import UserInformation from "./components/UserInformation/UserInformation";

const Home = () => {
    return (
        <FlexContainer maxWidth="120rem" maxHeight="100%">
            <Header />
            <UserInformation />
        </FlexContainer>
    );
};

export default Home;
