import Header from "../../common/components/Header/Header";
import FlexContainer from "../../common/components/FlexContainer/FlexContainer";
import UserInformation from "./components/UserInformationSection/UserInformationSection";
import { ContentSection } from "./Home.Styles";
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
