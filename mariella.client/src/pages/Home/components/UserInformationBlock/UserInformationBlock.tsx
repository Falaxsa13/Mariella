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
    models?: BaseModel[];
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
    const [buttonsModels, setButtonsModels] = useState<BaseModel[]>(
        props.models || []
    );
    const [currentButtonModel, setCurrentButtonModel] = useState<BaseModel>();

    useEffect(() => {
        // localStorage.setItem(props.localStorageKey, JSON.stringify(buttons));
    }, [buttonsModels]);

    const propertyNamesMap: PropertyNamesMap = {
        name: props.t("Name"),
        abbreviation: props.t("Abbreviation"),
    };

    const openDialog = (button?: BaseModel) => {
        if (button == undefined) {
            const id =
                buttonsModels.length > 0
                    ? buttonsModels.sort((model) => model.id)[0].id++
                    : 0;
            button = new BaseModel(id);
            setButtonsModels([...buttonsModels, button]);
        }

        setCurrentButtonModel(button);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const handleDialogInputChange = (
        key: string,
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        const buttons = [...buttonsModels];
        buttons[buttons.length - 1][key] = value;
        setButtonsModels(buttons);
        console.log(buttons);
    };

    return (
        <MainBox>
            <Title>{props.title}</Title>
            <ButtonsContainer>
                {buttonsModels.map((buttonModel, index) => (
                    <ButtonWithIcon
                        key={index}
                        color="#E4D6FC"
                        fontSize={size}
                        width={width}
                        text={buttonModel?.name}
                        height={height}
                        onClick={() => openDialog(buttonModel)}
                    />
                ))}
                <ButtonWithIcon
                    name="add"
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
                    onClick={() => openDialog()}
                />
            </ButtonsContainer>
            {isDialogOpen && currentButtonModel && (
                <Dialog
                    onClose={closeDialog}
                    isOpen={isDialogOpen}
                    shouldCloseOnEsc={true}
                    shouldCloseOnClickOutside={true}
                >
                    {Object.keys(currentButtonModel)
                        .slice(1)
                        .map((key) => (
                            <div key={key}>
                                <span>{propertyNamesMap[key]}: </span>
                                <input
                                    type="text"
                                    name={key}
                                    onChange={(event) =>
                                        handleDialogInputChange(key, event)
                                    }
                                    value={currentButtonModel[key] as string}
                                />
                            </div>
                        ))}
                </Dialog>
            )}
        </MainBox>
    );
};

export default UserInformationBlock;
