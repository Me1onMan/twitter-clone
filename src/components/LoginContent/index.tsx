import twitterIcon from "@/assets/images/twitter-bird.png";
import Button from "@/UI/Button";
import Input from "@/UI/Input";

import { Img, InputContainer, Link, Main, StyledH1 } from "./styled";

const LoginContent = () => {
  return (
    <Main>
      <Img src={twitterIcon} alt="Bird" title="Twitter" />
      <StyledH1>Log in to Twitter</StyledH1>
      <InputContainer>
        <Input placeholder="Phone number, email address" />
        <Input placeholder="Password" />
        <Button variant="primary">Log in</Button>
      </InputContainer>
      <Link href="/">Sign up to Twitter</Link>
    </Main>
  );
};

export default LoginContent;
