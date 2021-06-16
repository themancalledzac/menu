import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import AddItem from "./AddItem";

export default function CreateBody() {
  const BodyStyle = styled(Paper)`
    width: 90%;
    border: 1px solid black;
  `;
  return (
    <BodyStyle>
      <AddItem>Here is each ingredient</AddItem>
    </BodyStyle>
  );
}
