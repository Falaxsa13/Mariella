import React, { useEffect } from "react";
import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import Dialog from "../../../../common/Dialog/Dialog";
import BaseModel, { BaseModelKeys } from "../../../../models/BaseModel";
import CountryModel from "../../../../models/CountryModel";
import { TFunction } from "i18next";
import {
    ButtonsContainer,
    MainBox,
    Title,
} from "./UserInformationBlock.Styles";
import { useState } from "react";

interface InputField {
    modelPropertyName: BaseModelKeys;
    inputLabelString: string;
    type: string;
    references?: BaseModel[];
    objectsList?: CountryModel[];
}

interface UserInformationBlockProps {
    title: string;
    content: string;
    cardsLimit: number;
    models?: BaseModel[];
    localStorageKey: string;
    inputFields: InputField[];
    t: TFunction;
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
        key: BaseModelKeys,
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { value } = event.target;
        const buttons = [...buttonsModels];
        buttons[buttons.length - 1] = value;
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
                    {props.inputFields?.map((field, fieldIndex) => (
                        <div key={fieldIndex}>
                            <span>{field.inputLabelString}</span>
                            {(() => {
                                switch (field.type) {
                                    case "text":
                                        return (
                                            <input
                                                type="text"
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLInputElement>
                                                ) =>
                                                    handleDialogInputChange(
                                                        field.modelPropertyName,
                                                        event
                                                    )
                                                }
                                                value={
                                                    currentButtonModel[
                                                        field.modelPropertyName
                                                    ] as string
                                                }
                                            />
                                        );

                                    case "list":
                                        return (
                                            <select
                                                onChange={(
                                                    event: React.ChangeEvent<HTMLSelectElement>
                                                ) =>
                                                    handleDialogInputChange(
                                                        field.modelPropertyName,
                                                        event
                                                    )
                                                }
                                                value={
                                                    currentButtonModel[
                                                        field.modelPropertyName
                                                    ] as string
                                                }
                                            >
                                                {field.objectsList?.map(
                                                    (object, objectIndex) => (
                                                        <option
                                                            key={objectIndex}
                                                            value={
                                                                object.name
                                                                    .official
                                                            }
                                                        >
                                                            {object.name.common}
                                                        </option>
                                                    )
                                                )}
                                            </select>
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                        </div>
                    ))}
                </Dialog>
            )}
        </MainBox>
    );
};

export default UserInformationBlock;
