import ButtonWithIcon from "../../../../common/components/ButtonWithIcon/ButtonWithIcon";
import {
  RubricSectionContainer,
  ActionsContainer,
  StyledSpan,
} from "./RubricSection.Styles";
import {
  StyledTable,
  RubricSectionBlockContainer,
  ButtonStyledSpan,
} from "./RubricSection.Styles";

const RubricSection = () => {
  const Button = (src: string, text: string, onClick?: () => void) => (
    <ButtonWithIcon
      icon={{ src: src, width: "50px" }}
      color="white"
      text={text}
      width="160px"
      height="120px"
      styledSpan={ButtonStyledSpan}
      onClick={onClick}
    />
  );

  return (
    <RubricSectionContainer>
      <RubricSectionBlockContainer>
        <StyledSpan>Add a rubric</StyledSpan>
        <ActionsContainer>
          {Button("add.svg", "Create new rubric")}
          {Button("explore.svg", "Explore templates")}
        </ActionsContainer>
      </RubricSectionBlockContainer>
      <RubricSectionBlockContainer>
        <StyledTable>
          <thead>
            <tr>
              <th>
                <StyledSpan>Your rubrics</StyledSpan>
              </th>
              <th>Professor</th>
              <th>Author</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Álgebra Lineal</td>
              <td>Julio Yarasca</td>
              <td>Yo</td>
              <td>2023-I</td>
            </tr>
          </tbody>
        </StyledTable>
      </RubricSectionBlockContainer>
    </RubricSectionContainer>
  );
};

export default RubricSection;
