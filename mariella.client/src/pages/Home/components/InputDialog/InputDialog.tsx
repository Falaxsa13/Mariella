import React, { useEffect, useState } from "react";
import Dialog from "../../../../common/Dialog/Dialog";
import BaseModel from "../../../../models/BaseModel";
import CountryModel from "../../../../models/CountryModel";

interface List<T> {
  models: T[];
  optionValue: keyof T;
  option: keyof T;
}

interface ModelReference<
  PropertyUsedToFilterType = BaseModel,
  PropertyToFilterType = BaseModel
> {
  modelArrayToFilter: BaseModel[];
  modelArrayUsedToFilter: PropertyUsedToFilterType[];
  propertyToFilter: keyof PropertyToFilterType;
  propertyUsedToFilter: keyof PropertyUsedToFilterType;
}

interface InputField<T> {
  inputLabelText: string;
  inputType:
    | {
        type: "text";
        modelPropertyName: keyof T;
      }
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
        modelReference: ModelReference;
      };
}

interface InputDialogProps<T> {
  title?: string;
  model: T;
  inputFields: InputField<T>[];
  isOpen: boolean;
  onClose: () => void;
  onModelChange: (updatedModel: T) => void;
}

const InputDialog = <T extends BaseModel>(props: InputDialogProps<T>) => {
  const [currentModel, setCurrentModel] = useState<T>(props.model);

  const handleDialogInputChange = (
    key: keyof T,
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setCurrentModel((prevModel) => ({ ...prevModel, [key]: value }));
  };

  useEffect(() => {
    props.onModelChange(currentModel);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentModel]);

  return (
    <Dialog
      onClose={props.onClose}
      isOpen={props.isOpen}
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
              value={(currentModel[modelPropertyName] as string) ?? ""}
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
              value={currentModel[modelPropertyName] as string}
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
          const modelUsedToFilter = modelReference.modelArrayUsedToFilter.find(
            (model) => model.id == currentModel[modelReference.propertyToFilter]
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
  );
};

export default InputDialog;
export type { ModelReference, InputField };
