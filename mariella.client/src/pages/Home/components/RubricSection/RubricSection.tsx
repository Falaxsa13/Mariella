import RubricSectionBLock from "../RubricSectionBlock/RubricSectionBlock";
import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import {
    RubricSectionContainer,
    ActionsContainer,
    StyledSpan,
} from "./RubricSection.Styles";

const RubricSection = () => {
    const Button = (src: string, text: string) => (
        <ButtonWithIcon
            icon={{ src: src, width: "50px" }}
            color="white"
            text={text}
            width="160px"
            height="120px"
            styledSpan={StyledSpan}
        />
    );

    return (
        <RubricSectionContainer>
            <RubricSectionBLock title="Crea una rúbrica">
                <ActionsContainer>
                    {Button("add.svg", "Crear nueva rúbrica")}
                    {Button("explore.svg", "Explorar plantillas")}
                </ActionsContainer>
            </RubricSectionBLock>
            <RubricSectionBLock title="Tus rúbricas">{null}</RubricSectionBLock>
        </RubricSectionContainer>
    );
};

export default RubricSection;
