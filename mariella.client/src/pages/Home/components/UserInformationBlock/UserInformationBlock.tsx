import { useEffect, useState } from "react";
import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import BaseModel from "../../../../models/BaseModel";
import { TFunction } from "i18next";
import {
  ButtonsContainer,
  MainBox,
  Title,
} from "./UserInformationBlock.Styles";
import InputDialog, { InputField } from "../InputDialog/InputDialog";

interface UserInformationBlockProps<T> {
  title: string;
  addText: string;
  cardsLimit: number;
  models: T[];
  inputFields: InputField<T>[];
  createModel: (id: number) => T;
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
  const [models, setModels] = useState<T[]>(props.models);
  const [currentModel, setCurrentModel] = useState<T>();

  useEffect(() => {
    props.onModelsChange(models);
  }, [models, props]);

  const openDialog = (model?: T) => {
    if (model == undefined) {
      const id =
        models.length > 0 ? models.sort((model) => model.id)[0].id++ : 0;
      model = props.createModel(id);
      setModels([...models, model]);
    }

    setCurrentModel(model);
    setIsDialogOpen(true);
  };

  return (
    <MainBox>
      <Title>{props.title}</Title>
      <ButtonsContainer>
        {models.map((buttonModel, index) => (
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
      {currentModel && (
        <InputDialog
          model={currentModel}
          inputFields={props.inputFields}
          isOpen={isDialogOpen}
          onClose={() => setIsDialogOpen(false)}
          onModelChange={(updatedModel) =>
            setModels(
              models.map((model) =>
                model.id === updatedModel.id ? updatedModel : model
              )
            )
          }
        />
      )}
    </MainBox>
  );
};

export default UserInformationBlock;
