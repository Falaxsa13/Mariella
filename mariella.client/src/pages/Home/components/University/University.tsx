import { TFunction } from "i18next";
import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import { MainBox, Title, ButtonContainer } from "./University.Styles";
import { withTranslation } from "react-i18next";

export interface UniversityProps {
    t: TFunction;
    content: string;
}

const University = ({ content, t }: UniversityProps) => {
    return (
        <MainBox>
            <Title>Universidad</Title>
            <ButtonContainer>
                <ButtonWithIcon
                    color="#E4D6FC"
                    icon={{ src: "AddIcon.svg", width: "30px", height: "30px" }}
                    text={t(content)}
                />
            </ButtonContainer>
        </MainBox>
    );
};

export default withTranslation()(University);
