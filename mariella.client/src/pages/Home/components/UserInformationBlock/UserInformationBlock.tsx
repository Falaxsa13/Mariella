import React, { useEffect, useState } from "react";
import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import Dialog from "../../../../common/Dialog/Dialog";
import BaseModel from "../../../../models/BaseModel";
import { TFunction } from "i18next";
import {
  ButtonsContainer,
  MainBox,
  Title,
} from "./UserInformationBlock.Styles";
import CountryModel from "../../../../models/CountryModel";

interface List<T> {
  models: T[];
  optionValue: keyof T;
  option: keyof T;
}

interface ModelReference<U, V> {
  modelArrayToFilter: BaseModel[];
  modelArrayUsedToFilter: U[];
  propertyToFilter: keyof V;
  propertyUsedToFilter: keyof U;
}

interface InputField<T extends BaseModel> {
  inputLabelText: string;
  inputType:
    | { type: "text"; modelPropertyName: keyof T }
    | {
        type: "countryModelList";
        modelPropertyName: keyof T;
        list: List<CountryModel>;
      }
    | {
        type: "baseModelList";
        modelPropertyName: keyof T;
        list: List<BaseModel>;
      }
    | {
        type: "modelReference";
        modelReference: ModelReference<BaseModel, T>;
      };
}

interface UserInformationBlockProps<T extends BaseModel> {
  title: string;
  addText: string;
  cardsLimit: number;
  createModel: (id: number) => T; // factory property
  models: T[];
  inputFields: InputField<T>[];
  onModelsChange: (modelsArray: T[]) => void;
  t: TFunction;
}

const UserInformationBlock = <T extends BaseModel>(
  props: UserInformationBlockProps<T>
) => {
  const size = props.cardsLimit && props.cardsLimit > 2 ? "0.8rem" : "1rem";
  const width = props.cardsLimit && props.cardsLimit > 2 ? "30%" : "170px";
  const height = props.cardsLimit && props.cardsLimit > 2 ? "80Basepx" : "90px";
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [buttonsModels, setButtonsModels] = useState<T[]>(props.models);
  const [currentButtonModel, setCurrentButtonModel] = useState<T>();

  useEffect(() => {
    props.onModelsChange(buttonsModels);
  }, [buttonsModels, props]);

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
          {props.inputFields.map((field, fieldIndex) => {
            let inputElement = null;

            if (field.inputType.type == "text") {
              const modelPropertyName = field.inputType.modelPropertyName;

              inputElement = (
                <input
                  type="text"
                  autoComplete="disabled"
                  value={
                    (currentButtonModel[modelPropertyName] as string) ?? ""
                  }
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleDialogInputChange(modelPropertyName, event)
                  }
                />
              );
            } else if (
              field.inputType.type == "baseModelList" ||
              field.inputType.type == "countryModelList"
            ) {
              const modelPropertyName = field.inputType.modelPropertyName;
              const list = field.inputType.list;

              inputElement = (
                <select
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    handleDialogInputChange(modelPropertyName, event)
                  }
                  defaultValue={""}
                  value={currentButtonModel[modelPropertyName] as string}
                >
                  <option disabled value={""}>
                    Select...
                  </option>
                  {field.inputType.list.models.map((object, objectIndex) => (
                    <option
                      key={objectIndex}
                      value={object[list.optionValue as keyof object]}
                    >
                      {object[list.option as keyof object]}
                    </option>
                  ))}
                </select>
              );
            } else if (field.inputType.type == "modelReference") {
              const modelReference = field.inputType.modelReference;
              const modelUsedToFilter =
                modelReference.modelArrayUsedToFilter.find(
                  (model) =>
                    model.id ==
                    currentButtonModel[modelReference.propertyToFilter]
                );
              const modelToFilter = modelReference.modelArrayToFilter.find(
                (model) =>
                  model.id ==
                  modelUsedToFilter?.[modelReference.propertyUsedToFilter]
              );

              inputElement = (
                <input
                  autoComplete="disabled"
                  type="text"
                  value={modelToFilter?.name ?? ""}
                  disabled
                />
              );
            }

            return (
              <div key={fieldIndex}>
                <span>{field.inputLabelText}</span>
                {inputElement}
              </div>
            );
          })}
        </Dialog>
      )}
    </MainBox>
  );
};

export default UserInformationBlock;
export type { ModelReference };
