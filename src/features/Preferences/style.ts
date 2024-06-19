import styled, { css } from "styled-components";

export const Container = styled.div`
  border: none;
  width: 60vw;

  @media only screen and (max-device-width: 1024px) {
    width: 85vw;
  }
`;

export const PopoverContent = styled.div<{
  $isVisible: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); /* Adding a subtle shadow for depth. */
  transform: translate(50%, 50%);
  ${(props) => css`
    visibility: ${props.$isVisible ? "visible" : "hidden"};
  `}

  @media only screen and (max-device-width: 1024px) {
    transform: translate(50%, 50%);
  }
`;

export const PopoverContainer = styled.div<{
  $isVisible: boolean;
}>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  top: 0;
  left: 0;
  ${(props) => css`
    visibility: ${props.$isVisible ? "visible" : "hidden"};
    background-color: ${props.$isVisible
      ? "rgba(0, 0, 0, 0.5)"
      : "transparent"};
  `}
  transition: all ease 300ms;
`;
