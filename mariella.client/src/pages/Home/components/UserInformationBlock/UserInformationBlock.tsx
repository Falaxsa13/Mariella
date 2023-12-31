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
    buttons?: string[] | undefined;
    defaultButton?: string;
    t: TFunction;
}

const UserInformationBlock = ({
    title,
    content,
    t,
    buttons,
    defaultButton,
}: UserInformationBlockProps) => (
    <MainBox>
        <Title>{title}</Title>
        <ButtonContainer>
            {buttons &&
                buttons.map((course, index) => (
                    <ButtonWithIcon
                        key={index}
                        color="#E4D6FC"
                        icon={{
                            src: "AddIcon.svg",
                            width: "30px",
                            height: "30px",
                        }}
                        text={t(course)}
                    />
                ))}
            <ButtonWithIcon
                color="#E4D6FC"
                icon={{
                    src: "AddIcon.svg",
                    width: "30px",
                    height: "30px",
                }}
                text={t(defaultButton || content)}
            />
        </ButtonContainer>
    </MainBox>
);

export default UserInformationBlock;
