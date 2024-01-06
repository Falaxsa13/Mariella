import Header from "../../components/Header/Header";
import FlexContainer from "../../common/FlexContainer/FlexContainer";
import UserInformation from "./components/UserInformation/UserInformation";
import ContentSection from "./components/ContentBlock/ContentBlock";
import RubricSection from "./components/RubricSection/RubricSection";
import Dialog from "../../common/Dialog/Dialog";
import { useState } from "react";

const Home = () => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleDialogOpen = () => {
        setIsDialogOpen(true);
    };

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    return (
        <FlexContainer maxWidth="120rem" maxHeight="100%">
            <Header />
            <ContentSection>
                <RubricSection />
                <UserInformation />
            </ContentSection>
            <Dialog isOpen={isDialogOpen} />
        </FlexContainer>
    );
};

export default Home;
