import React, { useEffect, useState } from "react";
import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import Dialog from "../../../../common/Dialog/Dialog";
import BaseModel from "../../../../models/BaseModel";
import CountryModel from "../../../../models/CountryModel";
import { TFunction } from "i18next";
import {
    ButtonsContainer,
    MainBox,
    Title,
} from "./UserInformationBlock.Styles";

interface InputField<T extends BaseModel> {
    modelPropertyName: keyof T;
    inputLabelString: string;
    type: string;
    objectsList?: CountryModel[];
}

interface UserInformationBlockProps<T extends BaseModel> {
    title: string;
    addText: string;
    cardsLimit: number;
    createModel: (id: number) => T; // factory property
    models?: T[];
    localStorageKey: string;
    inputFields: InputField<T>[];
    t: TFunction;
}

const UserInformationBlock = <T extends BaseModel>(
    props: UserInformationBlockProps<T>
) => {
    const size = props.cardsLimit && props.cardsLimit > 2 ? "0.8rem" : "1rem";
    const width = props.cardsLimit && props.cardsLimit > 2 ? "30%" : "170px";
    const height =
        props.cardsLimit && props.cardsLimit > 2 ? "80Basepx" : "90px";
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
    const [buttonsModels, setButtonsModels] = useState<T[]>(props.models || []);
    const [currentButtonModel, setCurrentButtonModel] = useState<T>();

    useEffect(() => {
        // do not uncomment
        // localStorage.setItem(props.localStorageKey, JSON.stringify(buttons));
    }, [buttonsModels]);

    const openDialog = (button?: T) => {
        if (button == undefined) {
            const id =
                buttonsModels.length > 0
                    ? buttonsModels.sort((model) => model.id)[0].id++
                    : 0;
            button = props.createModel(id);
            setButtonsModels([...buttonsModels, button]);
        }

        setCurrentButtonModel(button);
        setIsDialogOpen(true);
    };

    const closeDialog = () => {
        setIsDialogOpen(false);
    };

    const handleDialogInputChange = (
        key: keyof T,
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { value } = event.target;
        const buttons = [...buttonsModels];
        if (currentButtonModel)
            currentButtonModel.setProperty(key, value as T[keyof T]);
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
                        text={buttonModel.abbreviation || buttonModel.name}
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
                    text={props.t(props.addText)}
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
