import UniversityContent from "../../content/UniversityContent.json";
import MajorContent from "../../content/MajorContent.json";
import CoursesContent from "../../content/CoursesContent.json";
import UserInformationBlock from "../UserInformationBlock/UserInformationBlock";
import { withTranslation } from "react-i18next";
import { MainBox, Banner } from "../UserInformation/UserInformation.Styles";
import { TFunction } from "i18next";

interface UserInformationProps {
    t: TFunction;
}

const UserInformation = ({ t }: UserInformationProps) => {
    return (
        <MainBox>
            <Banner />
            <UserInformationBlock
                title={t(UniversityContent.title)}
                content={t(UniversityContent.text)}
                t={t}
            />
            <UserInformationBlock
                title={t(MajorContent.title)}
                content={t(MajorContent.text)}
                t={t}
            />
            <UserInformationBlock
                title={t(CoursesContent.title)}
                content={t(CoursesContent.text)}
                buttons={CoursesContent.buttons}
                t={t}
            />
        </MainBox>
    );
};

export default withTranslation()(UserInformation);
