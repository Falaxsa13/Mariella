import { withTranslation } from "react-i18next";
import { MainBox } from "./UserInformation.styles";
import University from "../University/University";
import Banner from "../Banner/Banner";
import UniversityContent from "../../content/UniversityContent.json";
import MajorContent from "../../content/MajorContent.json";
import CoursesContent from "../../content/CoursesContent.json";
import Courses from "../Courses/Courses";
import Major from "../Major/Major";

const UserInformation = () => {
    return (
        <MainBox>
            <Banner />
            <University content={UniversityContent.text} />
            <Major content={MajorContent.text} />
            <Courses courses={CoursesContent.courses} />
        </MainBox>
    );
};

export default UserInformation;
