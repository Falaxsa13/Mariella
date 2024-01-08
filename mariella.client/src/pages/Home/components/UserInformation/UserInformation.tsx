import translation from "../../../../locales/en/translation.json";
import UserInformationBlock from "../UserInformationBlock/UserInformationBlock";
import Institution from "../../../../models/Institution";
import safeJsonParse from "../../../../common/utils/safeJsonParse";
import { withTranslation } from "react-i18next";
import { MainBox, Banner } from "./UserInformation.Styles";
import { TFunction } from "i18next";

interface UserInformationProps {
    t: TFunction;
}

const UserInformation = ({ t }: UserInformationProps) => {
    const jsonArray = localStorage.getItem("userInstitutions") as string;
    const userInstitutions = safeJsonParse<Institution[]>(jsonArray);

    return (
        <MainBox>
            <Banner />
            <UserInformationBlock
                title={t(translation.Institution)}
                content={t(translation.AddInstitution)}
                t={t}
                cardsLimit={1}
                models={userInstitutions || []}
                localStorageKey="userInstitutions"
            />
            {/* <UserInformationBlock
                title={t(translation.Major)}
                content={t(translation.AddMajor)}
                t={t}
                cardsLimit={1}
            />
            <UserInformationBlock
                title={t(translation.Courses)}
                content={t(translation.AddCourse)}
                t={t}
                cardsLimit={5}
            /> */}
        </MainBox>
    );
};

export default withTranslation()(UserInformation);
