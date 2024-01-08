import React from "react";
import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import Dialog from "../../../../common/Dialog/Dialog";
import BaseModel from "../../../../models/BaseModel";
import { TFunction } from "i18next";
import {
    ButtonsContainer,
    MainBox,
    Title,
} from "./UserInformationBlock.Styles";
import { useState } from "react";

interface UserInformationBlockProps {
    title: string;
    content: string;
    cardsLimit: number;
    models?: BaseModel[];
    t: TFunction;
}

interface PropertyNamesMap {
    [key: string]: string;
}

const UserInformationBlock = (props: UserInformationBlockProps) => {
    const size = props.cardsLimit && props.cardsLimit > 2 ? "0.8rem" : "1rem";
    const width = props.cardsLimit && props.cardsLimit > 2 ? "30%" : "170px";
    const height = props.cardsLimit && props.cardsLimit > 2 ? "80px" : "90px";
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [buttons, setButtons] = useState<BaseModel[]>(props.models || []);

    const propertyNamesMap: PropertyNamesMap = {
        name: props.t("Name"),
        abbreviation: props.t("Abbreviation"),
    };

    const addButton = () => {
        setButtons([...buttons, new BaseModel()]);
    };

    const openDialog = () => {
        setIsDialogOpen(true);
        addButton();
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const newButtons = [...buttons];
        newButtons[newButtons.length - 1].name = value;
        setButtons(newButtons);
    };

    return (
        <MainBox>
            <Title>{props.title}</Title>
            <ButtonsContainer>
                {buttons.map((buttonModel, index) => (
                    <ButtonWithIcon
                        key={index}
                        color="#E4D6FC"
                        fontSize={size}
                        width={width}
                        text={buttonModel?.name}
                        height={height}
                    />
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
                    onClick={openDialog}
                />
            </ButtonsContainer>
            <Dialog isOpen={isDialogOpen}>
                {buttons[0] &&
                    Object.keys(buttons[0]).map((key) => (
                        <div key={key}>
                            <span>{propertyNamesMap[key]}: </span>
                            <input
                                type="text"
                                name="name"
                                onChange={handleInputChange}
                            />
                        </div>
                    ))}
            </Dialog>
        </MainBox>
    );
};

export default UserInformationBlock;
