import translation from "../../../../locales/en/translation.json";
import UserInformationBlock from "../UserInformationBlock/UserInformationBlock";
import InstitutionModel from "../../../../models/InstitutionModel";
import MajorModel from "../../../../models/MajorModel";
import CourseModel from "../../../../models/CourseModel";
import CountryModel from "../../../../models/CountryModel";
import ApiCountryModel from "../../../../models/api/ApiCountryModel";
import safeJsonParse from "../../../../common/utils/safeJsonParse";
import { withTranslation } from "react-i18next";
import { MainBox, Banner } from "./UserInformation.Styles";
import { TFunction } from "i18next";
import { useEffect, useState } from "react";

interface UserInformationProps {
  t: TFunction;
}

const localStorageKeys = {
  institutions: "userInstitutions",
  majors: "userMajors",
  courses: "userCourses",
};

const UserInformation = ({ t }: UserInformationProps) => {
  const userInstitutions = safeJsonParse<InstitutionModel[]>(
    localStorage.getItem(localStorageKeys.institutions) as string
  );
  const userMajors = safeJsonParse<MajorModel[]>(
    localStorage.getItem(localStorageKeys.courses) as string
  );
  const userCourses = safeJsonParse<CourseModel[]>(
    localStorage.getItem(localStorageKeys.majors) as string
  );

  const [countriesList, setCountriesList] = useState<CountryModel[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=cca3,name,flag")
      .then((response: Response) => response.json())
      .then((data: ApiCountryModel[]) => {
        const formattedData: CountryModel[] = data.map(
          (country): CountryModel => ({
            cca3: country.cca3,
            commonName: country.name.common,
            officialName: country.name.official,
            flag: country.flag,
          })
        );

        setCountriesList(formattedData);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <MainBox>
      <Banner />
      <UserInformationBlock<InstitutionModel>
        title={t(translation.Institution)}
        addText={t(translation.AddInstitution)}
        t={t}
        cardsLimit={1}
        models={userInstitutions}
        createModel={(id) => new InstitutionModel(id)}
        localStorageKey={localStorageKeys.institutions}
        inputFields={[
          {
            modelPropertyName: "name",
            inputLabelString: t("Name"),
            type: "text",
          },
          {
            modelPropertyName: "abbreviation",
            inputLabelString: t("Abbreviation"),
            type: "text",
          },
          {
            modelPropertyName: "countryCca3",
            inputLabelString: t("Country"),
            type: "list",
            modelReference: {
              objects: countriesList,
              optionValue: "cca3",
              option: "commonName",
            },
          },
        ]}
      />
      <UserInformationBlock<MajorModel>
        title={t(translation.Major)}
        addText={t(translation.AddMajor)}
        t={t}
        cardsLimit={1}
        models={userMajors}
        createModel={(id) => new MajorModel(id)}
        localStorageKey={localStorageKeys.majors}
        inputFields={[
          {
            modelPropertyName: "name",
            inputLabelString: t("Name"),
            type: "text",
          },
          {
            modelPropertyName: "abbreviation",
            inputLabelString: t("Abbreviation"),
            type: "text",
          },
          {
            modelPropertyName: "institutionId",
            inputLabelString: t("Institution"),
            type: "list",
            modelReference: {
              objects: userInstitutions,
              optionValue: "id",
              option: "name",
            },
          },
        ]}
      />
      <UserInformationBlock<CourseModel>
        title={t(translation.Courses)}
        addText={t(translation.AddCourse)}
        t={t}
        cardsLimit={5}
        models={userCourses}
        createModel={(id) => new CourseModel(id)}
        localStorageKey={localStorageKeys.courses}
        inputFields={[
          {
            modelPropertyName: "name",
            inputLabelString: t("Name"),
            type: "text",
          },
          {
            modelPropertyName: "abbreviation",
            inputLabelString: t("Abbreviation"),
            type: "text",
          },
        ]}
      />
    </MainBox>
  );
};

export default withTranslation()(UserInformation);
