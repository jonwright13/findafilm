import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: white;
  text-transform: capitalize;
`;

export const Content = styled.div`
  height: 5vh;
`;

export const List = styled.ul`
  display: flex;
  gap: 24px;
  padding: 10px 0px;
  height: 30vh;

  @media only screen and (max-device-width: 1024px) {
    gap: 5px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 35vh;
  width: 100%;
`;

export const NoTitleTest = styled.p`
  color: white;
  font-size: x-large;
  width: 100%;
  overflow-y: hidden;
  height: 10vh;
  transform: translate(26vw, 10vh);
`;
