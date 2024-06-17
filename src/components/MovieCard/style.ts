import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  padding: 20px;
  border: 1px solid #282c34;
  background-color: white;
  border-radius: 12px;
  box-shadow: 5px 5px 5px black;

  @media only screen and (max-device-width: 1024px) {
    padding: 10px;
  }
`;

export const Container = styled.div`
  width: auto;
`;

export const Title = styled.h3`
  color: #282c34;
  font-size: calc(8px + 3vmin);
  margin-bottom: 6px;
  margin-top: 0px;
`;

export const Released = styled.h4`
  color: #282c34;
  font-weight: normal;
  font-size: 14px;
  margin: 0px 0px;
`;

export const Description = styled.p`
  font-size: calc(8px + 1vmin);
`;

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: 5px;
  bottom: 0;
  flex-direction: row;
  gap: 20px;
`;

export const Poster = styled.img<{
  src: string;
  alt: string;
}>`
  height: 25vh;
  width: 10vw;
  margin-right: 20px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #282c34;

  @media only screen and (max-device-width: 1024px) {
    height: 25vh;
    width: 30vw;
    margin-right: 10px;
  }
`;
