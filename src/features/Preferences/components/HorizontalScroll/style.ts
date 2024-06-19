import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
`;

export const ArrowWrapper = styled.div<{
  $isVisible: boolean;
}>`
  z-index: 1;
  display: flex;
  width: 250px;

  position: absolute;
  top: 0;
  bottom: 0;

  pointer-events: none;

  opacity: ${(props) => (props.$isVisible ? 1 : 0)};
  visibility: ${(props) => (props.$isVisible ? "visible" : "hidden")};
  transition: all ease 300ms;
`;

export const ArrowLeft = styled(ArrowWrapper)`
  left: 0;
  background-image: linear-gradient(to right, #282c34 10%, transparent 100%);
`;

export const ArrowRight = styled(ArrowWrapper)`
  justify-content: flex-end;
  right: 0;
  background-image: linear-gradient(to left, #282c34 10%, transparent 100%);
`;

export const ScrollableArea = styled.div<{ onScroll: any }>`
  display: flex;
  overflow-x: overlay;
  scrollbar-width: none;
`;

export const ArrowButton = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  pointer-events: auto;
  cursor: pointer;
  padding: 0px 32px;
  color: white;
`;
