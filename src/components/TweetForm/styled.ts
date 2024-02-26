import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 90%;

  margin-top: ${({ theme: { size } }) => size.px50};
`;

export const Avatar = styled.img``;

export const Form = styled.form``;

export const Textarea = styled.textarea`
  resize: none;
  outline: none;

  width: 100%;

  border: none;

  font-size: ${({ theme: { font } }) => font.fontSize.xl};
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    max-width: 120px;
    height: 50px;
  }
`;

export const Label = styled.label`
  cursor: pointer;
`;

export const UploadImg = styled.input`
  display: none;
`;

export const ImgIcon = styled.img``;
