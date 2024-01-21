import translation from "../../../../locales/en/translation.json";
import UserInformationBlock from "../UserInformationBlock/UserInformationBlock";
import InstitutionModel from "../../../../models/InstitutionModel";
import BaseModel from "../../../../models/BaseModel";
import MajorModel from "../../../../models/MajorModel";
import CourseModel from "../../../../models/CourseModel";
import CountryModel from "../../../../models/CountryModel";
import ApiCountryModel from "../../../../models/api/ApiCountryModel";
import safeJsonParse from "../../../../common/utils/safeJsonParse";
import { withTranslation } from "react-i18next";
import { MainBox, Banner } from "./UserInformation.Styles";
import { TFunction } from "i18next";
import React, { useEffect, useState } from "react";

interface UserInformationProps {
  t: TFunction;
}

const localStorageKeys = {
  institutions: "userInstitutions",
  majors: "userMajors",
  courses: "userCourses",
};

const UserInformation = ({ t }: UserInformationProps) => {
  const [userInstitutions, setUserInstitutions] = useState(
    safeJsonParse<InstitutionModel[]>(
      localStorage.getItem(localStorageKeys.institutions),
      []
    )
  );
  const [userMajors, setUserMajors] = useState(
    safeJsonParse<MajorModel[]>(
      localStorage.getItem(localStorageKeys.majors),
      []
    )
  );
  const [userCourses, setUserCourses] = useState(
    safeJsonParse<CourseModel[]>(
      localStorage.getItem(localStorageKeys.courses),
      []
    )
  );
  const [countriesList, setCountriesList] = useState<CountryModel[]>([]);

  const handleModelChange = <T extends BaseModel>(
    modelsArray: T[],
    setModels: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
    // do not uncomment
    // localStorage.setItem(props.localStorageKey, JSON.stringify(buttons));
    setModels(modelsArray);
  };

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

        formattedData.sort((countryModel1, countryModel2) =>
          countryModel1.commonName.localeCompare(countryModel2.commonName, "en")
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
        onModelsChange={(newInstitutions) =>
          handleModelChange(newInstitutions, setUserInstitutions)
        }
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
        onModelsChange={(newMajors) =>
          handleModelChange(newMajors, setUserMajors)
        }
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
        onModelsChange={(newCourses) =>
          handleModelChange(newCourses, setUserCourses)
        }
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
            modelPropertyName: "majorId",
            inputLabelString: t("Major"),
            type: "list",
            modelReference: {
              objects: userMajors,
              optionValue: "id",
              option: "name",
            },
          },
        ]}
      />
    </MainBox>
  );
};

export default withTranslation()(UserInformation);
