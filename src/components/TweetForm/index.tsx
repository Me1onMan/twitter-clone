import imgIcon from "@/assets/icons/image-icon.svg";
import avatar from "@/assets/images/avatar_small.png";
import Button from "@/UI/Button";

import {
  Avatar,
  ButtonContainer,
  Container,
  Form,
  ImgIcon,
  Label,
  Textarea,
  UploadImg,
} from "./styled";

const TweetForm = () => {
  return (
    <Container>
      <Avatar src={avatar} />
      <Form>
        <Textarea placeholder="What's happening" maxLength={2000} rows={5} />
        <ButtonContainer>
          <Label>
            <ImgIcon src={imgIcon} />
            <UploadImg type="file" />
          </Label>
          <Button variant="primary" onClick={() => undefined}>
            Tweet
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default TweetForm;
