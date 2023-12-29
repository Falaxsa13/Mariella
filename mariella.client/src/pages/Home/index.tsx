import Header from "../../components/Header";
import FlexContainer from "../../common/FlexContainer";
import UserInformation from "./components/UserInformation";

const Home: React.FC = () => {
    return (
        <FlexContainer maxWidth="120rem" maxHeight="100%">
            <Header />
            <UserInformation />
        </FlexContainer>
    );
};

export default Home;
