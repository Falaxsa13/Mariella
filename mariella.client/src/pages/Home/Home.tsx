import Header from "../../components/Header/Header";
import FlexContainer from "../../common/FlexContainer/FlexContainer";
import UserInformation from "./components/UserInformation/UserInformation";
import AddRubric from "./components/AddRubric/AddRubric";

const Home = () => {
    return (
        <FlexContainer maxWidth="120rem" maxHeight="100%">
            <Header />
            <div>
                <AddRubric />
            </div>
            <UserInformation />
        </FlexContainer>
    );
};

export default Home;
