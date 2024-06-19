import styled from "styled-components";

export const Poster = styled.div<{
  title?: string;
}>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Img = styled.img<{
  src: string;
  alt: string;
}>`
  height: 35vh;
  width: auto;
  margin-right: 20px;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #282c34;
  cursor: pointer;

  @media only screen and (max-device-width: 1024px) {
    height: 40vh;
  }
`;

export const Controls = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  position: absolute;
  z-index: 10;
  bottom: 0;
  margin-bottom: 30px;
`;
