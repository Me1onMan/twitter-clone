import styled from "styled-components";

const WRAPPER_HEIGHT = "100vh";
const GAP = "24px";
const IMAGE_WIDTH = "320px";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: ${WRAPPER_HEIGHT};
  color: black;
`;

export const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: ${GAP};
`;

export const Image = styled.img`
  width: ${IMAGE_WIDTH};
`;
