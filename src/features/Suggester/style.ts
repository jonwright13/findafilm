import styled from "styled-components";
import { Button } from "../../style/style";

export const SuggesterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  padding: 30px;
  width: 50vw;

  @media only screen and (max-device-width: 1024px) {
    padding: 10px;
    width: 90vw;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  margin: 20px 0px;
  transform: translateX(3%);
`;

export const GetSuggestionsButton = styled(Button)`
  background-color: teal;
  color: white;
  width: 150px;
  padding: 15px 0px;
`;

export const Errors = styled.p`
  color: red;
`;

export const SkeletonContainer = styled.div`
  height: 30vh;
`;
