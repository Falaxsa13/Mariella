import ButtonWithIcon from "../../../../common/ButtonWithIcon/ButtonWithIcon";
import BaseModel from "../../../../models/BaseModel";
import { TFunction } from "i18next";
import {
  ButtonsContainer,
  MainBox,
  Title,
} from "./UserInformationBlock.Styles";
import InputDialog, { InputField } from "../InputDialog/InputDialog";
import { useInputDialog } from "../InputDialog/useInputDialog";

interface UserInformationBlockProps<T> {
  title: string;
  addText: string;
  cardsLimit: number;
  initialModels: T[];
  inputFields: InputField<T>[];
  createModel: (id: number) => T;
  onModelsChange: (updatedModel: T[]) => void;
  t: TFunction;
}

const UserInformationBlock = <T extends BaseModel>(
  props: UserInformationBlockProps<T>
) => {
  const size = props.cardsLimit && props.cardsLimit > 2 ? "0.8rem" : "1rem";
  const width = props.cardsLimit && props.cardsLimit > 2 ? "30%" : "170px";
  const height = props.cardsLimit && props.cardsLimit > 2 ? "80Basepx" : "90px";
  const dialogManager = useInputDialog(
    props.initialModels,
    props.createModel,
    props.onModelsChange
  );

  return (
    <MainBox>
      <Title>{props.title}</Title>
      <ButtonsContainer>
        {dialogManager.models.map((buttonModel, index) => (
          <ButtonWithIcon
            key={index}
            color="#E4D6FC"
            fontSize={size}
            width={width}
            text={buttonModel.abbreviation || buttonModel.name}
            height={height}
            onClick={() => dialogManager.openDialog(buttonModel)}
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
          onClick={() => dialogManager.openDialog()}
        />
      </ButtonsContainer>
      {dialogManager.isDialogOpen && dialogManager.currentModel && (
        <InputDialog
          model={dialogManager.currentModel}
          inputFields={props.inputFields}
          isOpen={dialogManager.isDialogOpen}
          onClose={() => dialogManager.setIsDialogOpen(false)}
          onModelChange={(updatedModel) =>
            dialogManager.setModels(
              dialogManager.models.map((model) =>
                model.id == updatedModel.id ? updatedModel : model
              )
            )
          }
        />
      )}
    </MainBox>
  );
};

export default UserInformationBlock;
