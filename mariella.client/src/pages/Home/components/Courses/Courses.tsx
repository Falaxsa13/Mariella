import { TFunction } from "i18next";
import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import { MainBox, Title, ButtonContainer } from "./Courses.Styles";
import { withTranslation } from "react-i18next";

export interface CoursesProps {
    t: TFunction;
    courses: {
        course1: string;
        course2: string;
        course3: string;
    }[];
}

const Courses = ({ courses, t }: CoursesProps) => {
    return (
        <MainBox>
            <Title>Carrera</Title>
            <ButtonContainer>
                <ButtonWithIcon
                    color="#E4D6FC"
                    icon={{ src: "AddIcon.svg", width: "30px", height: "30px" }}
                    text={t(courses[0]?.course1 || "Default Text")}
                />
                <ButtonWithIcon
                    color="#E4D6FC"
                    icon={{ src: "AddIcon.svg", width: "30px", height: "30px" }}
                    text={t(courses[0]?.course2 || "Default Text")}
                />
                <ButtonWithIcon
                    color="#E4D6FC"
                    icon={{ src: "AddIcon.svg", width: "30px", height: "30px" }}
                    text={t(courses[0]?.course2 || "Default Text")}
                />
                
            </ButtonContainer>
        </MainBox>
    );
};

export default withTranslation()(Courses);
