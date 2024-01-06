import React from "react";
import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import { TFunction } from "i18next";
import { ButtonContainer, MainBox, Title } from "./UserInformationBlock.Styles";
import { useState } from "react";

interface UserInformationBlockProps {
    title: string;
    content: string;
    cardsLimit: number;
    t: TFunction;
}

const UserInformationBlock = (props: UserInformationBlockProps) => {
    const size = props.cardsLimit && props.cardsLimit > 2 ? "0.8rem" : "1rem";
    const width = props.cardsLimit && props.cardsLimit > 2 ? "30%" : "170px";
    const height = props.cardsLimit && props.cardsLimit > 2 ? "80px" : "90px";
    const [buttons, setButtons] = useState<JSX.Element[]>([]);

    const addButton = () => {
        const newButton = (
            <ButtonWithIcon
                key={buttons.length}
                color="#E4D6FC"
                icon={{
                    src: "add.svg",
                    width: "30px",
                    height: "30px",
                }}
                fontSize={size}
                width={width}
                text={"Hola"}
                height={height}
            />
        );

        setButtons([...buttons, newButton]);
    };

    return (
        <MainBox>
            <Title>{props.title}</Title>
            <ButtonContainer>
                {buttons.map((button, index) => (
                    <React.Fragment key={index}>{button}</React.Fragment>
                ))}
                <ButtonWithIcon
                    color="#E4D6FC"
                    icon={{
                        src: "add.svg",
                        width: "30px",
                        height: "30px",
                    }}
                    fontSize={size}
                    width={width}
                    text={props.t(props.content)}
                    height={height}
                    onClick={addButton}
                />
            </ButtonContainer>
        </MainBox>
    );
};

export default UserInformationBlock;
