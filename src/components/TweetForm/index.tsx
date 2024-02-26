import { ChangeEvent, FormEvent, useState } from "react";
import { useSelector } from "react-redux";

import imgIcon from "@/assets/icons/image-icon.svg";
import avatar from "@/assets/images/avatar_small.png";
import addTweet from "@/firebase/actions/addTweet";
import { selectUser } from "@/store/slices/userSlice";
import { TFile } from "@/types";
import Button from "@/UI/Button";

import Loader from "../Loader";

import {
  Avatar,
  ButtonContainer,
  Container,
  Form,
  ImgIcon,
  Label,
  LoaderContainer,
  Textarea,
  UploadImg,
} from "./styled";

const TweetForm = () => {
  const { id: authorizedUserId } = useSelector(selectUser);
  const [text, setText] = useState("");
  const [file, setFile] = useState<TFile>();
  const [fileName, setFileName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files === null) return;

    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await addTweet({
        authorId: authorizedUserId,
        text,
        file,
        setIsLoading,
      });
      setText("");
      setFile(null);
      setFileName("");
    } catch (error) {
      throw new Error("Error while sending post");
    }
  };

  return (
    <Container>
      {isLoading && (
        <LoaderContainer>
          <Loader />
        </LoaderContainer>
      )}
      <Avatar src={avatar} />
      <Form onSubmit={handleSubmit}>
        <Textarea
          value={text}
          onChange={handleTextChange}
          placeholder="What's happening"
          maxLength={2000}
          rows={5}
        />
        <ButtonContainer>
          <Label>
            <ImgIcon src={imgIcon} />
            <UploadImg type="file" onChange={handleFileChange} />
            <p>{fileName}</p>
          </Label>
          <Button
            variant="primary"
            type="submit"
            onClick={() => undefined}
            disabled={text.length === 0 || isLoading}
          >
            Tweet
          </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};

export default TweetForm;
