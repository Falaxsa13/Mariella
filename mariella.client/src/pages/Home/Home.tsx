import Header from "../../components/Header/Header";
import FlexContainer from "../../common/FlexContainer/FlexContainer";
import UserInformation from "./components/UserInformation/UserInformation";
import ContentSection from "./components/ContentBlock/ContentBlock";
import RubricSection from "./components/RubricSection/RubricSection";

const Home = () => {
  return (
    <FlexContainer maxWidth="120rem" maxHeight="100%">
      <Header />
      <ContentSection>
        <RubricSection />
        <UserInformation />
      </ContentSection>
    </FlexContainer>
  );
};

export default Home;
