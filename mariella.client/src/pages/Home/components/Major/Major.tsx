import { TFunction } from "i18next";
import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import { MainBox, Title, ButtonContainer } from "./Major.Styles";
import { withTranslation } from "react-i18next";

export interface UniversityProps {
    t: TFunction;
    content: string;
}

const Major = ({ content, t }: UniversityProps) => {
    return (
        <MainBox>
            <Title>Carrera</Title>
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

export default withTranslation()(Major);
