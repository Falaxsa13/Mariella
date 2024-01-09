import translation from "../../../../locales/en/translation.json";
import UserInformationBlock from "../UserInformationBlock/UserInformationBlock";
import InstitutionModel from "../../../../models/InstitutionModel";
import MajorModel from "../../../../models/MajorModel";
import CourseModel from "../../../../models/CourseModel";
import safeJsonParse from "../../../../common/utils/safeJsonParse";
import { withTranslation } from "react-i18next";
import { MainBox, Banner } from "./UserInformation.Styles";
import { TFunction } from "i18next";

interface UserInformationProps {
    t: TFunction;
}

const UserInformation = ({ t }: UserInformationProps) => {
    const userInstitutionLocalStorageKey = "userInstitutions";
    const userMajorsLocalStorageKey = "userMajors";
    const userCoursesLocalStorageKey = "userCourses";

    const userInstitutions = safeJsonParse<InstitutionModel[]>(
        localStorage.getItem(userInstitutionLocalStorageKey) as string
    );
    const userMajors = safeJsonParse<MajorModel[]>(
        localStorage.getItem(userMajorsLocalStorageKey) as string
    );
    const userCourses = safeJsonParse<CourseModel[]>(
        localStorage.getItem(userCoursesLocalStorageKey) as string
    );

    return (
        <MainBox>
            <Banner />
            <UserInformationBlock
                title={t(translation.Institution)}
                content={t(translation.AddInstitution)}
                t={t}
                cardsLimit={1}
                models={userInstitutions}
                localStorageKey={userInstitutionLocalStorageKey}
                inputFields={[
                    {
                        modelPropertyName: "name",
                        inputLabelString: t("Name"),
                        type: "text",
                    },
                    {
                        modelPropertyName: "abbrevitation",
                        inputLabelString: t("Abbrevitation"),
                        type: "text",
                    },
                ]}
            />
            {/* <UserInformationBlock
                title={t(translation.Major)}
                content={t(translation.AddMajor)}
                t={t}
                cardsLimit={1}
                models={userMajors}
                localStorageKey={userMajorsLocalStorageKey}
            />
            <UserInformationBlock
                title={t(translation.Courses)}
                content={t(translation.AddCourse)}
                t={t}
                cardsLimit={5}
                models={userCourses}
                localStorageKey={userCoursesLocalStorageKey}
            /> */}
        </MainBox>
    );
};

export default withTranslation()(UserInformation);
