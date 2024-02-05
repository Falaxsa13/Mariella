import translation from "../../../../locales/en/translation.json";
import UserInformationBlock from "../UserInformationSectionBlock/UserInformationSectionBlock";
import InstitutionModel from "../../../../models/InstitutionModel";
import BaseModel from "../../../../models/BaseModel";
import MajorModel from "../../../../models/MajorModel";
import CourseModel from "../../../../models/CourseModel";
import CountryModel from "../../../../models/CountryModel";
import ApiCountryModel from "../../../../models/api/ApiCountryModel";
import { ModelReference } from "../InputDialog/InputDialog";
import { withTranslation } from "react-i18next";
import { MainBox, Banner } from "./UserInformationSection.Styles";
import { TFunction } from "i18next";
import React, { useEffect, useState } from "react";
import { useLocalStorage } from "../../../../common/hooks/useLocalStorage";
import localStorageKeys from "../../../../common/constants/localStorageKeys";

interface UserInformationProps {
  t: TFunction;
}

const UserInformation = ({ t }: UserInformationProps) => {
  const [userInstitutions, setUserInstitutions] = useLocalStorage<
    InstitutionModel[]
  >(localStorageKeys.institutions, []);
  const [userMajors, setUserMajors] = useLocalStorage<MajorModel[]>(
    localStorageKeys.majors,
    []
  );
  const [userCourses, setUserCourses] = useLocalStorage<CourseModel[]>(
    localStorageKeys.courses,
    []
  );
  const [countriesList, setCountriesList] = useState<CountryModel[]>([]);

  const handleModelChange = <T extends BaseModel>(
    modelsArray: T[],
    setModels: React.Dispatch<React.SetStateAction<T[]>>
  ) => {
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
        initialModels={userInstitutions}
        createModel={(id) => new InstitutionModel(id)}
        onModelsChange={(newInstitutions) =>
          handleModelChange(newInstitutions, setUserInstitutions)
        }
        inputFields={[
          {
            inputLabelText: t("Name"),
            inputType: { type: "text", modelPropertyName: "name" },
          },
          {
            inputLabelText: t("Abbreviation"),
            inputType: { type: "text", modelPropertyName: "abbreviation" },
          },
          {
            inputLabelText: t("Country"),
            inputType: {
              type: "countryModelList",
              modelPropertyName: "countryCca3",
              list: {
                models: countriesList,
                optionValue: "cca3",
                option: "commonName",
              },
            },
          },
        ]}
      />
      <UserInformationBlock<MajorModel>
        title={t(translation.Major)}
        addText={t(translation.AddMajor)}
        t={t}
        cardsLimit={1}
        initialModels={userMajors}
        createModel={(id) => new MajorModel(id)}
        onModelsChange={(newMajors) =>
          handleModelChange(newMajors, setUserMajors)
        }
        inputFields={[
          {
            inputLabelText: t("Name"),
            inputType: { type: "text", modelPropertyName: "name" },
          },
          {
            inputLabelText: t("Abbreviation"),
            inputType: { type: "text", modelPropertyName: "abbreviation" },
          },
          {
            inputLabelText: t("Institution"),
            inputType: {
              type: "baseModelList",
              modelPropertyName: "institutionId",
              list: {
                models: userInstitutions,
                optionValue: "id",
                option: "name",
              },
            },
          },
        ]}
      />
      <UserInformationBlock<CourseModel>
        title={t(translation.Courses)}
        addText={t(translation.AddCourse)}
        t={t}
        cardsLimit={5}
        initialModels={userCourses}
        createModel={(id) => new CourseModel(id)}
        onModelsChange={(newCourses) =>
          handleModelChange(newCourses, setUserCourses)
        }
        inputFields={[
          {
            inputLabelText: t("Name"),
            inputType: { type: "text", modelPropertyName: "name" },
          },
          {
            inputLabelText: t("Abbreviation"),
            inputType: { type: "text", modelPropertyName: "abbreviation" },
          },
          {
            inputLabelText: t("Major"),
            inputType: {
              type: "baseModelList",
              modelPropertyName: "majorId",
              list: {
                models: userMajors,
                optionValue: "id",
                option: "name",
              },
            },
          },
          {
            inputLabelText: t("Institution"),
            inputType: {
              type: "modelReference",
              modelReference: {
                modelArrayToFilter: userInstitutions,
                modelArrayUsedToFilter: userMajors,
                propertyToFilter: "majorId",
                propertyUsedToFilter: "institutionId",
              } as ModelReference<MajorModel, CourseModel>,
            },
          },
        ]}
      />
    </MainBox>
  );
};

export default withTranslation()(UserInformation);
