import { withTranslation } from "react-i18next";
import { MainBox } from "./UserInformation.styles";
import University from "../University/University";
import Banner from "../Banner/Banner";
import UniversityContent from "../../content/UniversityContent.json";

const UserInformation = () => {
    return (
        <MainBox>
            <Banner />
            <University content={UniversityContent.text} />
        </MainBox>
    );
};

export default UserInformation;
