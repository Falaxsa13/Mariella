import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import CoursesButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
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
    buttons?: string[][] | undefined;
    defaultButton?: string[];
    t: TFunction;
}

const UserInformationBlock = ({
    title,
    content,
    t,
    buttons,
    defaultButton,
    cardsLimit,
}: UserInformationBlockProps) => {
    const buttonsToShow = cardsLimit ? buttons?.slice(0, cardsLimit) : buttons;
    const size = cardsLimit && cardsLimit > 2 ? "0.8rem" : "1rem";
    const width = cardsLimit && cardsLimit > 2 ? "30%" : "170px";
    const height = cardsLimit && cardsLimit > 2 ? "80px" : "90px";
    return (
        <MainBox>
            <Title>{title}</Title>
            <ButtonContainer>
                {buttonsToShow &&
                    buttonsToShow.map(([buttonText, buttonIcon], index) => (
                        <ButtonWithIcon
                            key={index}
                            color="#E4D6FC"
                            icon={{
                                src: buttonIcon,
                                width: "30px",
                                height: "30px",
                            }}
                            fontSize={size}
                            width={width}
                            text={t(buttonText)}
                            height={height}
                        />
                    ))}
                <ButtonWithIcon
                    color="#E4D6FC"
                    icon={{
                        src: "AddIcon.svg",
                        width: "30px",
                        height: "30px",
                    }}
                    fontSize={size}
                    width={width}
                    text={t(defaultButton || content)}
                    height={height}
                />
            </ButtonContainer>
        </MainBox>
    );
};

export default UserInformationBlock;
