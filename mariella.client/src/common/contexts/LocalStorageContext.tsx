import { Dispatch, ReactNode, SetStateAction, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import InstitutionModel from "../../models/InstitutionModel";
import localStorageKeys from "../constants/localStorageKeys";
import MajorModel from "../../models/MajorModel";
import CourseModel from "../../models/CourseModel";
import GradingRubricModel from "../../models/GradingRubricModel";

interface LocalStorageContextValue {
  userInstitutionsState: {
    userInstitutions: InstitutionModel[];
    setUserInsitutions: Dispatch<SetStateAction<InstitutionModel[]>>;
  };
  userMajorsState: {
    userMajors: MajorModel[];
    setUserMajors: Dispatch<SetStateAction<MajorModel[]>>;
  };
  userCoursesState: {
    userCourses: CourseModel[];
    setUserCourses: Dispatch<SetStateAction<CourseModel[]>>;
  };
  userGradingRubricsState: {
    userGradingRubrics: GradingRubricModel[];
    setUserGradingRubrics: Dispatch<SetStateAction<GradingRubricModel[]>>;
  };
}

interface LocalStorageProviderProps {
  children: ReactNode;
}

export const LocalStorageContext =
  createContext<LocalStorageContextValue | null>(null);

export const LocalStorageProvider = (props: LocalStorageProviderProps) => {
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
  const [userGradingRubrics, setUserGradingRubrics] = useLocalStorage<
    GradingRubricModel[]
  >(localStorageKeys.gradingRubrics, []);

  return (
    <LocalStorageContext.Provider
      value={{
        userInstitutionsState: {
          userInstitutions: userInstitutions,
          setUserInsitutions: setUserInstitutions,
        },
        userMajorsState: {
          userMajors: userMajors,
          setUserMajors: setUserMajors,
        },
        userCoursesState: {
          userCourses,
          setUserCourses
        },
        userGradingRubricsState: {
          userGradingRubrics,
        }
      }}
    >
      {props.children}
    </LocalStorageContext.Provider>
  );
};
