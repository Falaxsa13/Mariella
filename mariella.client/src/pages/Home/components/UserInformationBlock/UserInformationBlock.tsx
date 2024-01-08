import React, { useEffect } from "react";
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
    models: BaseModel[];
    localStorageKey: string;
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
    const [buttons, setButtons] = useState<BaseModel[]>(props.models);

    useEffect(() => {
        // localStorage.setItem(props.localStorageKey, JSON.stringify(buttons));
    }, [buttons]);

    const propertyNamesMap: PropertyNamesMap = {
        name: props.t("Name"),
        abbreviation: props.t("Abbreviation"),
    };

    const openDialog = () => {
        const id =
            buttons.length > 0 ? buttons.sort((model) => model.id)[0].id++ : 0;
        setIsDialogOpen(true);
        setButtons([...buttons, new BaseModel(id)]);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const handleDialogInputChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
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
                        onClick={openDialog}
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
            <Dialog
                onClose={closeDialog}
                isOpen={isDialogOpen}
                shouldCloseOnEsc={true}
                shouldCloseOnClickOutside={true}
            >
                {buttons[0] &&
                    Object.keys(buttons[0]).map((key) => (
                        <div key={key}>
                            <span>{propertyNamesMap[key]}: </span>
                            <input
                                type="text"
                                name="name"
                                onChange={handleDialogInputChange}
                            />
                        </div>
                    ))}
            </Dialog>
        </MainBox>
    );
};

export default UserInformationBlock;
