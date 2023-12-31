import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import { TFunction } from "i18next";
import {
    ButtonContainer,
    MainBox,
    Title,
} from "../UserInformationBlock/UserInformationBlock.Styles";

interface UserInformationBlockProps {
    title: string;
    content: string;
    cardsLimit?: number;
    t: TFunction;
}

const UserInformationBlock = ({
    title,
    content,
    t,
}: UserInformationBlockProps) => (
    <MainBox>
        <Title>{title}</Title>
        <ButtonContainer>
            <ButtonWithIcon
                color="#E4D6FC"
                icon={{ src: "AddIcon.svg", width: "30px", height: "30px" }}
                text={t(content)}
            />
        </ButtonContainer>
    </MainBox>
);

export default UserInformationBlock;
